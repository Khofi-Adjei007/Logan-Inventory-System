const IGNORE = Symbol('ignore')

function definition (variables, node, opts) {
  let name = node.prop.slice(1)
  variables[name] = transformBackslashSequences(node.value)

  if (!opts.keep) {
    node.remove()
  }
}

function variable (variables, node, str, name, opts, result) {
  if (isIgnore(node, name)) return str

  if (opts.only) {
    if (typeof opts.only[name] !== 'undefined') {
      return opts.only[name]
    }

    return str
  }

  if (typeof variables[name] !== 'undefined') {
    return variables[name]
  }

  if (opts.silent) {
    return str
  }

  let fix = opts.unknown(node, name, result)

  if (fix) {
    return fix
  }

  return str
}

const UNICODE_8_CODE = /(?<=[^\\]|^)\\U([0-9abcdefABCDEF]{8})/g
const UNICODE_4_CODE = /(?<=[^\\]|^)\\u([0-9abcdefABCDEF]{4})/g

function transformBackslashSequences(value) {
  if (typeof value !== 'string') return value
  if (!value.includes('\\')) return value
  return value
    .replace(UNICODE_8_CODE, (_, cp) => String.fromCodePoint(`0x${cp}`))
    .replace(UNICODE_4_CODE, (_, cp) => String.fromCodePoint(`0x${cp}`))
    .replace(/\\\\/g, '\\')
}

function simpleSyntax (variables, node, str, opts, result) {
  return str.replace(/(^|[^\w])\$([\w\d-_]+)/g, (_, bef, name) => {
    return bef + variable(variables, node, '$' + name, name, opts, result)
  })
}

function inStringSyntax (variables, node, str, opts, result) {
  return str.replace(/\$\(\s*([\w\d-_]+)\s*\)/g, (all, name) => {
    return variable(variables, node, all, name, opts, result)
  })
}

function bothSyntaxes (variables, node, str, opts, result) {
  str = simpleSyntax(variables, node, str, opts, result)
  str = inStringSyntax(variables, node, str, opts, result)
  return str
}

function repeat (value, callback) {
  let oldValue
  let newValue = value
  do {
    oldValue = newValue
    newValue = callback(oldValue)
  } while (newValue !== oldValue && newValue.includes('$'))
  return newValue
}

function declValue (variables, node, opts, result) {
  node.value = repeat(node.value, value => {
    return bothSyntaxes(variables, node, value, opts, result)
  })
}

function declProp (variables, node, opts, result) {
  node.prop = repeat(node.prop, value => {
    return inStringSyntax(variables, node, value, opts, result)
  })
}

function ruleSelector (variables, node, opts, result) {
  node.selector = repeat(node.selector, value => {
    return bothSyntaxes(variables, node, value, opts, result)
  })
}

function atruleParams (variables, node, opts, result) {
  node.params = repeat(node.params, value => {
    return bothSyntaxes(variables, node, value, opts, result)
  })
}

function comment (variables, node, opts, result) {
  node.text = node.text.replace(/<<\$\(\s*(\w+)\s*\)>>/g, (all, name) => {
    return variable(variables, node, all, name, opts, result)
  })
}

function mixin (helpers, node) {
  let name = node.params.split(/\s/, 1)[0]
  let vars = node.params.slice(name.length).trim()

  if (vars.length) {
    node[IGNORE] = helpers.list.comma(vars).map(str => {
      let arg = str.split(':', 1)[0]
      return arg.slice(1).trim()
    })
  }
}

function isIgnore (node, value) {
  if (node[IGNORE] && node[IGNORE].includes(value)) {
    return true
  } else if (node.parent) {
    return isIgnore(node.parent, value)
  } else {
    return false
  }
}

module.exports = (opts = {}) => {
  if (!opts.unknown) {
    opts.unknown = (node, name) => {
      throw node.error('Undefined variable $' + name)
    }
  }

  if (typeof opts.keep === 'undefined') {
    opts.keep = false
  }

  return {
    postcssPlugin: 'postcss-simple-vars',
    prepare () {
      let variables = {}
      if (typeof opts.variables === 'function') {
        variables = opts.variables()
      } else if (typeof opts.variables === 'object') {
        variables = { ...opts.variables }
      }

      for (let name in variables) {
        if (name[0] === '$') {
          name = name.slice(1)
          variables[name] = variables[`$${name}`]
          delete variables[`$${name}`]
        }
        variables[name] = transformBackslashSequences(variables[name])
      }
      return {
        OnceExit (_, { result }) {
          Object.keys(variables).forEach(key => {
            result.messages.push({
              plugin: 'postcss-simple-vars',
              type: 'variable',
              name: key,
              value: variables[key]
            })
          })
          if (opts.onVariables) {
            opts.onVariables(variables)
          }
        },
        Declaration (node, { result }) {
          if (node.value.includes('$')) {
            declValue(variables, node, opts, result)
          }
          if (node.prop[0] === '$' && node.prop[1] !== '(') {
            if (!opts.only) definition(variables, node, opts)
          } else if (node.prop.includes('$(')) {
            declProp(variables, node, opts, result)
          }
        },
        Comment (node, { result }) {
          if (node.text.includes('$')) {
            comment(variables, node, opts, result)
          }
        },
        AtRule (node, helpers) {
          if (node.name === 'define-mixin') {
            mixin(helpers, node)
          } else if (node.params && node.params.includes('$')) {
            atruleParams(variables, node, opts, helpers.result)
          }
        },
        Rule (node, { result }) {
          if (node.selector.includes('$')) {
            ruleSelector(variables, node, opts, result)
          }
        }
      }
    }
  }
}
module.exports.postcss = true

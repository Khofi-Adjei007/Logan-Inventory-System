declare module 'postcss-simple-vars' {
  /**
   * imports postcss
   */
  import * as postcss from 'postcss'

  /**
   * Simple vars namespace
   */
  namespace simpleVars {
    /**
     * variables Argument
     * @interface IArgument
     */
    type IArgument = {
      [index: string]: any
    }

    /**
     * Callable argument
     * @type {function}
     * @interface ICallableArgument
     */
    type ICallableArgument = () => IArgument

    /**
     * Vars argument
     * @export
     * @interface ISimpleVarsArgument
     */
    export interface ISimpleVarsArgument extends ISimpleVarsBase {
      variables?: IArgument
    }

    /**
     * Base options interface
     * @interface ISimpleVarsBase
     */
    interface ISimpleVarsBase {
      /**
       * Set value only for variables from this object. Other variables will not be changed.
       * It is useful for PostCSS plugin developers.
       * @type {*}
       * @memberOf ISimpleVarsBase
       */
      only?: any

      /**
       * Callback invoked once all variables in css are known.
       * The callback receives an object representing the known variables,
       * including those explicitly-declared by the variables option.
       */
      onVariables?: (vars: string) => void

      /**
       * Left unknown variables in CSS and do not throw an error.
       * @default {false}
       * @type {boolean}
       */
      silent?: boolean

      /**
       * Keep variables as is and not delete them.
       * @default {false}
       * @type {boolean}
       */
      keep?: boolean

      /**
       * Callback on unknown variable name. It receives node instance, variable name and PostCSS Result object.
       * @memberOf ISimpleVarsBase
       */
      unknown?: (
        node: postcss.Node,
        name: string,
        result: postcss.Result
      ) => void
    }

    /**
     * Callable variables argument
     * @export
     * @interface ISimpleVarsCallableArgument
     */
    export interface ISimpleVarsCallableArgument extends ISimpleVarsBase {
      variables: ICallableArgument
    }
  }

  /**
   * Exported function
   * @param {simpleVars.ISimpleVarsArgument} arg
   * @returns {*}
   */
  function simpleVars(arg?: simpleVars.ISimpleVarsArgument): any

  /**
   * Exported function
   * @param {simpleVars.ISimpleVarsArgument} arg
   * @returns {*}
   */
  function simpleVars(arg: simpleVars.ISimpleVarsCallableArgument): any

  /**
   * Default export
   */
  export = simpleVars
}

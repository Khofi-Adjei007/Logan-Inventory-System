# PostCSS Simple Variables

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

[PostCSS] plugin for Sass-like variables.

You can use variables inside values, selectors and at-rule parameters.

```pcss
$dir:    top;
$blue:   #056ef0;
$column: 200px;

.menu_link {
  background: $blue;
  width: $column;
}
.menu {
  width: calc(4 * $column);
  margin-$(dir): 10px;
}
```

```css
.menu_link {
  background: #056ef0;
  width: 200px;
}
.menu {
  width: calc(4 * 200px);
  margin-top: 10px;
}
```

If you want be closer to W3C spec,
you should use [postcss-custom-properties] and [postcss-at-rules-variables] plugins.

Look at [postcss-map] for big complicated configs.

[postcss-at-rules-variables]: https://github.com/GitScrum/postcss-at-rules-variables
[postcss-custom-properties]:  https://github.com/postcss/postcss-custom-properties
[postcss-map]:                https://github.com/pascalduez/postcss-map
[PostCSS]:                    https://github.com/postcss/postcss

<a href="https://evilmartians.com/?utm_source=postcss-simple-vars">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>


## Docs
Read **[full docs](https://github.com/postcss/postcss-simple-vars#readme)** on GitHub.

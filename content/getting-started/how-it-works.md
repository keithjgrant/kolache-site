---
title: "How it Works"
date: 2018-02-14T16:29:40-05:00
---

## A Common Foundation

In order for CSS packages to work across multiple sites, Kolache provides a predictable baseline. This is made up of four parts:

1. Normalize.css
2. A standardized set of theme variables
3. A minimal set of non-opinionated base styles
4. PreCSS (as standardized set of PostCSS plugins)

## Normalize.css

Kolache automatically injects [normalize.css](https://necolas.github.io/normalize.css/) at the beginning of your stylesheet. If you already have Normalize on your page, you can skip this step by passing the `includeNormalize: false` option in your PostCSS config.

## Theme variables

Kolache packages rely on a set of set of pre-defined Sass-style variables (e.g. `$color-primary`). These are all defined in a theme stylesheet. A theme stylesheet must define values for all of these variables.

The first line of your stylesheet should import the theme you wish to use:

```css
@import "kolache/core/theme";
```

See [core/theme.css](https://github.com/keithjgrant/kolache/blob/master/core/theme.css) for a complete list of variables.

## Base styles

Immediately after importing a theme, you should import the base styles:

```css
@import "kolache/core/theme";
@import "kolache/core/base";
```

This uses the theme variables to apply some basic styling, such as heading fonts, link colors, and some other common base styles (including global border-box sizing). It is not strictly required, but it is highly recommended.

If you are putting multiple stylesheets on a page, this only needs to be included in one of them.

## PreCSS

After importing all packages into your stylesheet, Kolache then runs it through [PreCSS](https://github.com/jonathantneal/precss) plugin pack. This way, all packages can rely on a common set of plugins like variable processing, nested selectors, and other Sass-like features.

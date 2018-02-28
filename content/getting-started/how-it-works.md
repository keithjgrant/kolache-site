---
title: "How it Works"
date: 2018-02-14T16:29:40-05:00
menu: "usage"
description: A standard foundation for any project
weight: 2
---

In order for CSS packages to work across multiple sites, Kolache provides a predictable baseline. This is made up of four parts:

1. Normalize.css
2. A standardized set of theme variables
3. A minimal set of non-opinionated base styles
4. PreCSS (as standardized set of PostCSS plugins)

Because this setup is standard, any Kolache package can depend on it; thus it can be used in any project that uses Kolache. This baseline is configurable and non-opinionated enough that it can work for any CSS project.

## Normalize.css

Kolache automatically injects [normalize.css](https://necolas.github.io/normalize.css/) at the beginning of your stylesheet. If you already have Normalize on your page, you can skip this step by passing the `includeNormalize: false` option in your PostCSS config.

## Theme Variables

Kolache packages rely on a set of set of pre-defined Sass-style variables (e.g. `$color-primary`). These are all defined in a theme stylesheet. A theme stylesheet must define values for all of these variables.

The first line of your stylesheet should import the theme you wish to use:

```css
@import "kolache/core/theme";
```

See [the Themes page](/getting-started/themes) for a detailed look at how Kolache themes work.

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

## Not included: Autoprefixer and minifier

Kolache does *not* run your CSS through [Autoprefixer](https://github.com/postcss/autoprefixer). It is **strongly recommended** that you add this to the end of your PostCSS plugin list, as well as a minifier such as [cssnano](http://cssnano.co/). Kolache’s core packages are written without vendor prefixes.

The reason it is not included is so you can add other PostCSS plugins into your build chain after Kolache but before Autoprefixer.

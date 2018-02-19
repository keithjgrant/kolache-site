---
title: "Usage"
date: 2018-02-18T18:52:07-05:00
description: An essential part of Kolache is the `@import` rule. It works a few ways.
---

## Partials

The simplest form of an `@import` is to import a partial. If you’re familiar with Sass and Less imports, this is basically the same.

```css
@import "path/to/file";
```

This will find the file referenced and insert it into your stylesheet at the current location. The pathname is relative to the current stylesheet’s location.

## Importing packages

If a stylesheet *exports* a package (see [development](/development)), you can import it into your stylesheet with the `@import … as` syntax:

```css
@import "path/to/package" as .classname;
```

This finds an exported package in the indicated file and imports it as the class name (or other selector) you specify. For instance, `@import "button" as .btn;` will import the package in `button.css` under the class name `btn`. If you add `<button class="btn">` to your page, it will now have that package’s styles.

The pathname may be relative to the current directory, or it can be relative to your `node_modules` directory. With Kolache installed in your npm dependencies, you can import the [core packages](/core) directly. For example, to import the button package:

```css
@import "kolache/core/button" as .button;
```

The package’s styles will now be part of your stylesheet.

### Customizing packages

Packages typically depend on your [theme variables](/getting-started/how-it-works/#theme-variables). This way, it will automatically adapt to the colors, border radius, and other styles defined in your theme.

This may not be perfectly to your liking, however, so you can override variables used by the package. These changes will be *local*, applied only to this package. It looks like this:

```css
@import "kolache/core/button" as .button {
  $color: $color-primary;
  $bg-color: white;
  $font-weight: bold;
}
```

This will result in a different button. The text color is set to `$color-primary`, which is a variable set by the theme. The background color is white and the font-weight will be set to bold.

It’s important to know which variables are used by each package, and how they are applied to CSS properties. See the [core packages](/core) documention for details on which variables are used by which packages in the Kolache core.

### Variants

A file may export multiple packages. These *named exports* can be referenced with a colon syntax:

```css
@import "kolache/core/button:color" as .button--danger {
  $color: red;
}
```

Conventional CSS frameworks provide a set number of variants for their packages. Often, this is more than you need. Sometimes, it’s not enough. With Kolache variants, you can import exactly the number of variants you need, customizing them each exactly to your liking.

For example, if you need two color variants, you can import the same variant twice, each time providing different values for the parameter variables:

```css
@import "kolache/core/button:color" as .button--danger {
  $bg-color: $color-danger;
}
@import "kolache/core/button:color" as .button--success {
  $bg-color: $color-success;
}
```

This defines a `.button--danger` based on your theme’s danger color (e.g. red) and a `.button--success` based on your theme’s success color (e.g. green).

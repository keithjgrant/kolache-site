---
title: "Themes"
date: 2018-02-26T21:07:08-05:00
description: Define a common look and feel for all modules you import
weight: 4
---

The first thing in your stylesheet should be an imported theme file. This file sets a number of preprocessor variables that define colors, fonts, and the general look and feel for your project.

Theme variables follow standardized names. This way, every package you import can safely assume these variables have been defined, and use them to style itself appropriately. This enables the same package to appear one way in one project and a different way in a second project.

## Default theme

Kolache provides a default theme. You can import it like this:

```css
@import "kolache/core/theme";
```

This sets basic values that work well for a general-purpose design.

## Customizing a theme

You are not required to use the default theme. You can create your own. As long as your theme defines values for all the same preprocessor variables, your theme will be used by Kolache packages you import into your stylesheet.

You can also selectively override just the variables you want:

```css
@import "kolache/core/theme";
$font-family: Times New Roman, serif;
$color-primary: #51a3fb;
```

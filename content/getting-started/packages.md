---
title: "Building Packages"
date: 2018-02-27T13:58:44-05:00
description: Define a reusable module
weight: 5
---

While Kolache comes with its own [set of packages](/core/), its real power is that it enables you to build the packages you need, and re-use them across projects.

## Defining a package

A package should be define in its own stylesheet. This file should be named accordingly. A package defining an alert message, for instance, could be called alert.css”. It should be named in the singular. In that file, define the package CSS in an `@export` at-rule:

```css
@export {
  $(name) {
    padding: $offset-padding;
    border: 1px solid $color-primary;
    border-radius: $border-radius;
  }
}
```

Everything inside the `@export` braces will be added when imported. This CSS makes heavy use of preprocessor variables. `$offset-padding`, `$border-radius`, and `$color-primary` are all variables provided by [the theme](/getting-started/themes/).

The `$name` variable is a special variable supplied by Kolache. When this is imported into a stylesheet, this variable will be set to the selector specified by the import. It will typically be used in the selector for the module. (The parentheses escape the variable so it can be used in a selector.) For example, in this import:

```css
@import "alert" as .alert;
```

In this example, the `.alert` selector is specified as the import name, so this becomes the value of the `$name` variable. It will be replaced anywhere it is referenced inside the module. The other variables will be specified in from the theme, resulting in something like:

```css
.alert {
  padding: 0.3em 0.8em;
  border-radius: 0.2rem;
  border: 1px solid #196eb3;
}
```

### Custom parameters

You should strive to rely on the theme variables as much as possible, so your module will automatically render to match the rest of the user’s site styles. But sometimes, they might not mean quite what you want. You can define custom parameters—and their default values—as the first thing in your export rule:

```css
@export {
  $color: color-mod($color-primary shade(30%));
  $bg-color: color-mod($color lightness(90%));
  $margin: 0 0 0.5rem;

  $(name) {
    margin: $margin;
    padding: $offset-padding;
    border: 1px solid $color;
    border-radius: $border-radius;
    color: $color;
    background-color: $bg-color;
  }
}
```

This example uses some variables that are not theme variables: `$color`, `$bg-color`, and `$margin`. Some of them are derived from theme variables, but `$margin` simply has a hard-coded default.

This way, it still adapts to the theme, but you can use variable names that make more sense in the context of your module. When this module is imported, any of these variables can be overridden by the user:

```css
@import "alert" as .alert {
  $color: green;
  $margin: 15px 0 15px;
}
```

These values will override the default values provided in your module. And in this case, because `$bg-color` is derived from `$color`, it will adapt as well, even though it isn’t explicitly set.

When importing an individual module, any of the theme variables can be overridden:

```css
@import "alert" as .alert {
  $border-radius: 1em;
}
```

This will set a different `$border-radius` for this module only, without altering the value of the theme variable in the global scope.

## Multiple selectors in a module

You are not restricted to one selector per module. Re-use the `$name` variable or nest selectors as needed:

```css
@export {
  $color: $color-primary;

  $(name) {
    border: 1px solid $color;

    > a {
      text-decoration: underline;
      color: $color;
    }
  }

  $(name)__title {
    font-weight: bold;
  }
}
```

Then, using `@import "alert" as .alert`, this would compile to something like:

```css
.alert {
  border: 1px solid #196eb3;
}

.alert > a {
  text-decoration: underline;
  color: #196eb3;
}

.alert__title {
  font-weight: bold;
}
```

## Named exports

Place multiple related modules in the same file, and use named exports to differentiate them. Typically, this will mean the primary module is exported as normal, and any related modules are exported by name. This is a great way to provide one or more types of variant of the primary module.

Named exports use the `@export … as` syntax:

```css
@export as "color" {
  $color: $color-danger;
  $border-color: $color;

  $(name) {
    color: $color;
    border-color: $border-color;
  }
}
```

Now a stylesheet can import the core module, and some color variants using the `:` syntax. This is the filename followed the export name, separated by a colon:

```css
@import "alert" as .alert;
@import "alert:color" as .alert--danger {
  $color: $color-danger;
}
@import "alert:color" as .alert--success {
  $color: $color-success;
}
```

Using these variants, `<div class="alert alert--danger">` would create one color of alert box, while `<div class="alert alert--success">` would create another. A well-designed variant module can be used to create multiple variants in the stylesheet.

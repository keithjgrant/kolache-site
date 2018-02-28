---
title: "Content"
date: 2018-02-14T16:29:45-05:00
description: These core packages are provided in the Kolache library. Use `@import` to import them from `kolache/core/*`.
weight: -2
---

<div class="alert alert--danger">
The core packages are still a work in progress. They are subject to change while in early development. I’m adding to this documentation as I build packages, so some may be documented here before the are published to npm.
</div>

## Base styles

You should import a theme and the Kolache base partials as the first two things in your stylesheet:

```css
@import "kolache/core/theme";
@import "kolache/core/base";
```

The theme partial sets all the necessary variables for use in the rest of your styles (including the base styles and Kolache packages). Other themes may be used as well as long as the set values for all the same variables.

The base partial sets some default styles such as headings, tables, and other element types.

## Fonts

The default Kolache theme uses a native font stack. This is assigned to the `$font-family` variable:

{{< code-example css >}}$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol" !default;{{< /code-example >}}

If you wish to use a different font, re-assign this variable prior to `@import`ing the base styles partial.

This variable is then assigned to `$font-family-heading`, which is applied to `<h1>` through `<h4>` headings. Assign a different font stack to this variable if you want a different headings font.

### Font Weights

Font weights are set by four variables. These are set by the theme and may be overridden either globally or in each package where they are referenced.

* `$font-weight-light`
* `$font-weight-normal`
* `$font-weight-bold`
* `$font-weight-black`

Not all fonts support light and black weights. In those instances, the browser will fall back to normal and bold weights, respectively.

<!-- font scalar? -->
<!-- ems, paddings, etc? -->

## Headings

Heading styles are applied to `<h1>` through `<h6>` elements. Corresponding class names can also be used when you need to match the style but want to use a different HTML element.

| Markup                              | Example                       |
| ----------------------------------- | ----------------------------- |
| `<h1></h1>`<br>`<p class="h1"></p>` | <p class="h1">Level One</p>   |
| `<h2></h2>`<br>`<p class="h2"></p>` | <p class="h2">Level Two</p>   |
| `<h3></h3>`<br>`<p class="h3"></p>` | <p class="h3">Level Three</p> |
| `<h4></h4>`<br>`<p class="h4"></p>` | <p class="h4">Level Four</p>  |
| `<h5></h5>`<br>`<p class="h5"></p>` | <p class="h5">Level Five</p>  |
| `<h6></h6>`<br>`<p class="h6"></p>` | <p class="h6">Level Six</p>   |

## Misc styles

Many other elements are cleaned up and minimally styled, so you can add to their styles however you like.

### Lists

{{< rendered-only >}}
<ul>
  <li>item 1</li>
  <li>
    item 2
    <ul>
      <li>item 2.1</li>
      <li>item 2.2</li>
    </ul>
  </li>
  <li>item 3</li>
</ul>
{{< /rendered-only >}}
{{< code-example >}}
<ul>
  <li>…</li>
</ul>
{{< /code-example >}}

{{< rendered-only >}}
<ol>
  <li>item 1</li>
  <li>
    item 2
    <ol>
      <li>item 2.1</li>
      <li>
        item 2.2
        <ol>
          <li>item 2.2.1</li>
          <li>item 2.2.2</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>item 3</li>
</ol>
{{< /rendered-only >}}
{{< code-example >}}
<ol>
  <li>…</li>
</ol>
{{< /code-example >}}

### Tables

{{< rendered-only >}}
<table>
  <caption>This is a table caption</caption>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table Cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table Cell</td>
    </tr>
  </tbody>
</table>
{{< /rendered-only >}}
{{< code-example >}}
<table>
  <caption>…</caption>
  <thead>
    <tr>
      <th>…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>…</td>
    </tr>
  </tbody>
</table>
{{< /code-example >}}

### Blockquotes

{{< rendered-only >}}
<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Etiam iaculis tortor massa, et dictum odio molestie vitae. Quisque
pulvinar nisi posuere ornare volutpat. Donec bibendum mi vitae fermentum
convallis. Morbi hendrerit tincidunt mauris in ullamcorper.</blockquote>
{{< /rendered-only >}}
{{< code-example >}}
<blockquote>…</blockquote>
{{< /code-example >}}

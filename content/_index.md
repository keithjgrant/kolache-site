---
title: "Kolache"
description: Reuse CSS packages in muliple projects and across themes.
---
If you ever wished you could simply `npm install` a bit of CSS, Kolache makes it possible:

```css
@import "button" as .button;
```

You choose the selector it imports as, so if `.button` collides with a class name you’re already using, you can import to a different class name of your choosing.

<p class="lead">Part preprocessor, part CSS framework, part package manager</p>

Kolache will import from a relative directory or from your `node_modules`.

Customize packages by setting parameter variables:

```css
@import "button" as .button {
  $color: red;
}
```

<a href="/getting-started/usage" class="button">Using Kolache</a>

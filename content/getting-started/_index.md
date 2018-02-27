---
title: "Getting Started"
date: 2018-02-14T16:29:34-05:00
description: Install and setup Kolache
---

## Installation

Kolache is available on [npm](https://www.npmjs.com/package/kolache).

```console
$ npm install kolache
```

## Usage

Kolache is a [PostCSS](http://postcss.org/) plugin. Choose whichever PostCSS runner suits your workflow:

[CLI](https://www.npmjs.com/package/postcss-cli), [webpack](https://www.npmjs.com/package/postcss-loader), [gulp](https://www.npmjs.com/package/gulp-postcss), [grunt](https://www.npmjs.com/package/grunt-postcss), [browserify](https://www.npmjs.com/package/browserify-postcss), or any other PostCSS runner.

If you use postcss-cli, for example, you can run Kolache from the console or as an npm script:

```console
postcss --use kolache -c postss.config.js -o public/styles.css src/index.css
```

## What is PostCSS?

PostCSS is a tool for transforming your CSS. It’s similar to CSS preprocessors such as Sass and Less, except it is plugin-based. [Read more here](<a href="https://github.com/postcss/postcss#readme" class="
).

## It’s installed! Now what?

Start writing some CSS!

Begin your stylesheet by importing a theme and the base styles. See [How it Works](/getting-started/how-it-works) for more on this.

```css
@import "kolache/core/theme";
@import "kolache/core/base";
```

With that in place, you can start [importing and customizing packages](/getting-started/usage), or write styles of your own.

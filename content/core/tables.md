---
title: "Tables"
date: 2018-02-28T17:18:38-05:00
description: Display your data in style.
weight: 7
---

The basic table provides 100% width, subtle borders, and moderate padding.

{{< code-example css >}}
@import "kolache/core/table" as .table;
{{< /code-example >}}

{{< rendered-example >}}
<table class="table">
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
    <tr>
    <tr>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
      <td>table cell</td>
      <td>table cell</td>
      <td>table cell</td>
    </tr>
  </tbody>
</table>
{{< /rendered-example >}}


{{< alert >}}
Tip: You can use `@import "kolache/core/table" as table;` to style all tables on the page without the use of a class.
{{< /alert >}}

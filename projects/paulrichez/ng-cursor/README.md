# Ng-Cusor

## Overview

A simple Angular directive to choose the cursor css propertie

I recommend to use SVG file, not png

## Démo

[Démo/doc](https://lib-creator.vercel.app/ng-cursor)

## Installation
```
npm i ng-cursor
```

``` ts
  import { NgCursorModule } from 'ng-cursor';
  ...
  imports: [
    NgCursorModule,
  ]
``` 

## Usage
```html
  <span ngCursor="pointer"[ngCursorImportant]="true">Pointer</span> <!-- cursor pointer with !important -->
  <span ngCursor="pointer!important">Pointer</span> <!-- same but without use the input cursorImportant -->
  <span ngCursor="url(assets/cursor/heart.svg)">heart</span> <!-- cursor from asset -->
  <span ngCursor="url(assets/cursor/heart.svg)!important">heart</span> <!-- cursor from asset && link can be used with !important too -->
  <span ngCursor="url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.svg)">happy</span> <!-- cursor from link -->
```


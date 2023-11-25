# NgThemeSystem

## Overview

A simple Angular service which return the user system theme( use [ng-theme-system](https://www.npmjs.com/package/ng-theme-system))

## Démo

[Démo/doc](https://lib-creator.vercel.app/ng-theme-system)

## Installation

```
npm i ng-theme-system
```

```ts
import { NgThemeSystemService } from "ng-theme-system";

imports: [NgThemeSystemService];
```

## Usage

```ts
    import { NgThemeSystemService } from 'ng-theme-system';

   constructor(private themeSystemService: NgThemeSystemService) {
    console.log('isDarkTheme', this.themeSystemService.isDarkTheme());
    console.log('isLightTheme', this.themeSystemService.isLightTheme());
    console.log('currentTheem', this.themeSystemService.getSytemTheme());
    this.themeSystemService.listenSystemTheme().subscribe((theme) => {
      console.log('themeChangeListener', theme);
    });
  }

```

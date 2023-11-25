# Ngx-terminal

## Overview

A simple Angular terminal very light size ( use [easy-terminal](https://www.npmjs.com/package/easy-terminal) a non dependencies vanilla javascript terminal)

## Démo

[Démo/doc](https://lib-creator.vercel.app/ngx-terminal)

## Installation
```
npm i ngx-terminal
```

``` ts
  import { NgxTerminalModule } from 'ngx-terminal';

  imports: [
    NgxTerminalModule,
  ]
``` 

## Usage
```html
  <ngx-terminal></ngx-terminal>
```

## Interfaces
  | name           | type             | default | desc                                                 |
  | -------------- | ---------------- | ------- | ---------------------------------------------------- |
  | getSytemTheme         | function return strinng           | N/A     | return 'light' or 'dark'                        |
  | isLightTheme        | function return boolean           | N/A    | return true if system theme is light                        |
  | isDarkTheme    | function return boolean      | N/A    | return true if system theme is dark                    |
  | listenSystemTheme        | Observable<'string'>      | N/A       |Observable which listen the change with boolean for initial value or not                            |

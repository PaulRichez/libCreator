# ng-openai

## Overview

A simple Angular service for openai(chatGPT)

## Démo

[Démo](https://stackblitz.com/edit/angular-ivy-jqxxxf)

## Installation
```
npm i npm install ng-openai
```

``` ts
import { NgOpenaiModule } from 'ng-openai';

imports: [
    NgOpenaiModule.forRoot('sk-XXXXXXXXXXXXXXXXXXXXXX'), // your API key here
]
``` 

## Usage
```ts
const completion = await this.ngOpenaiService.openai().createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
});
console.log(completion.data.choices[0].text);
```


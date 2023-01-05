import { Component } from '@angular/core';
import { NgOpenaiService } from 'projects/ng-openai/src/public-api';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.scss']
})
export class OpenaiComponent {
  usageCodeImport = `
  import { NgOpenaiModule } from 'ng-openai';

  imports: [
    NgOpenaiModule.forRoot('sk-XXXXXXXXXXXXXXXXXXXXXX'), // your API key here
  ]
  `;
  usageCode = `
  const completion = await this.ngOpenaiService.openai().createCompletion({
    model: "text-davinci-002",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
  `
  constructor(public ngOpenaiService: NgOpenaiService) {

  }
}

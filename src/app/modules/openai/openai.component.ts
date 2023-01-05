import { Component } from '@angular/core';
import { NgOpenaiService } from 'projects/ng-openai/src/public-api';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.scss']
})
export class OpenaiComponent {
  constructor(public ngOpenaiService: NgOpenaiService) {
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenaiRoutingModule } from './openai-routing.module';
import { OpenaiComponent } from './openai.component';
import { NgOpenaiModule } from 'projects/ng-openai/src/public-api';


@NgModule({
  declarations: [
    OpenaiComponent
  ],
  imports: [
    CommonModule,
    OpenaiRoutingModule,
    NgOpenaiModule.forRoot('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'),
  ]
})
export class OpenaiModule { }

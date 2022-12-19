import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePreviewMultipleComponent } from './code-preview-multiple/code-preview-multiple.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'ngx-highlightjs';


@NgModule({
  declarations: [
    CodePreviewMultipleComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [
    HighlightModule,
    CodePreviewMultipleComponent
  ]
})
export class SharedModule { }

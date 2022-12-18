import { NgModule } from '@angular/core';
import { NgCursorComponent } from './ng-cursor.component';
import { NgCursorDirective } from './ng-cursor.directive';



@NgModule({
  declarations: [
    NgCursorComponent,
    NgCursorDirective
  ],
  imports: [
  ],
  exports: [
    NgCursorComponent
  ]
})
export class NgCursorModule { }

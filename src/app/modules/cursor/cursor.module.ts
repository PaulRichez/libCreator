import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor.component';
import { NgCursorModule } from 'projects/paulrichez/ng-cursor/src/public-api';
import { CursorRoutingModule } from './cursor-routing.module';



@NgModule({
  declarations: [
    CursorComponent,
  ],
  imports: [
    NgCursorModule,
    CommonModule,
    CursorRoutingModule
  ],
})
export class CursorModule {
}

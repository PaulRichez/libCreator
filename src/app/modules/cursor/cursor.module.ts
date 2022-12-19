import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor.component';
import { NgCursorModule } from 'projects/paulrichez/ng-cursor/src/public-api';
import { CursorRoutingModule } from './cursor-routing.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DynamicCursorComponent } from './components/dynamic-cursor/dynamic-cursor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CursorComponent,
    DynamicCursorComponent,
  ],
  imports: [
    NgCursorModule,
    CommonModule,
    CursorRoutingModule,
    FormsModule,
    MatSelectModule,
    SharedModule
  ]
})
export class CursorModule {
}

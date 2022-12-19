import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursorComponent } from './cursor.component';

const routes: Routes = [
  { path: '', component: CursorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursorRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenaiComponent } from './openai.component';

const routes: Routes = [
  { path: '', component: OpenaiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenaiRoutingModule { }

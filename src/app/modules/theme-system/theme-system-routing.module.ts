import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeSystemComponent } from './theme-system.component';


const routes: Routes = [
  { path: '', component: ThemeSystemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeSystemRoutingModule { }

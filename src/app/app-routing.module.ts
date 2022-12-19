import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ng-cursor', pathMatch: 'full' },
  { path: 'ng-cursor', loadChildren: () => import('./cursor/cursor.module').then(m => m.CursorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

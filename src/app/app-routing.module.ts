import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'ng-cursor', loadChildren: () => import('./modules/cursor/cursor.module').then(m => m.CursorModule) },
  { path: 'ngx-terminal', loadChildren: () => import('./modules/terminal/terminal.module').then(m => m.TerminalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

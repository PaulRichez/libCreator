import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'ng-cursor', loadChildren: () => import('./modules/cursor/cursor.module').then(m => m.CursorModule) },
  { path: 'ngx-terminal', loadChildren: () => import('./modules/terminal/terminal.module').then(m => m.TerminalModule) },
  { path: 'ng-openai', loadChildren: () => import('./modules/openai/openai.module').then(m => m.OpenaiModule) },
  { path : 'ng-theme-system' , loadChildren: () => import('./modules/theme-system/theme-system.module').then(m => m.ThemeSystemModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgThemeSystemModule } from 'ng-theme-system';
import { ThemeSystemRoutingModule } from './theme-system-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeSystemComponent } from './theme-system.component';
import { DemoNgThemeSystemComponent } from './components/demo-ng-theme-system/demo-ng-theme-system.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ThemeSystemComponent,
    DemoNgThemeSystemComponent
  ],
  imports: [
    CommonModule,
    ThemeSystemRoutingModule,
    NgThemeSystemModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class ThemeSystemModule { }

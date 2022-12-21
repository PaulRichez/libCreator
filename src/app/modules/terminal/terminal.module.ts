import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalComponent } from './terminal.component';
import { NgxTerminalModule } from 'projects/ngx-terminal/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoTerminalComponent } from './components/demo-terminal/demo-terminal.component';


@NgModule({
  declarations: [
    TerminalComponent,
    DemoTerminalComponent
  ],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    NgxTerminalModule,
    SharedModule
  ]
})
export class TerminalModule { }

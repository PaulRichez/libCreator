import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalComponent } from './terminal.component';
import { NgxTerminalModule } from 'projects/ngx-terminal/src/public-api';


@NgModule({
  declarations: [
    TerminalComponent
  ],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    NgxTerminalModule
  ]
})
export class TerminalModule { }

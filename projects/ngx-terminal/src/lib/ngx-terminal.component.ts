import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { EasyTerminal } from 'easy-terminal';
import { ITerminalCommand } from 'easy-terminal/models/TerminalCommand.model';
@Component({
  selector: 'ngx-terminal',
  templateUrl: './ngx-terminal.component.html',
  styleUrls: ['./ngx-terminal.component.scss']
})
export class NgxTerminalComponent implements AfterViewInit {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() window: any;
  @Input() welcome!: string;
  @Input() nativeCommands: boolean = false;
  @Input() history: boolean = false;
  @Input() noEmptyCommand: boolean = false;
  @Input() customCommands: ITerminalCommand[] = [];
  @ViewChild('terminal') terminalElement!: ElementRef;
  ngAfterViewInit(): void {
    new EasyTerminal({
      elementHtml: this.terminalElement.nativeElement as HTMLElement,
      window: this.window,
      nativeCommands: this.nativeCommands,
      welcome: this.welcome,
      history: this.history,
      noEmptyCommand: this.noEmptyCommand,
      customCommands: this.customCommands
    });
  }
}

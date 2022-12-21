import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  usageCodeImport = `
  import { NgxTerminalModule } from 'ngx-terminal';
  imports: [
    NgxTerminalModule,
  ]
  `

  usageCode = `
  <ngx-terminal></ngx-terminal>`;
  demoCode = [
    {
      fileName: 'html',
      lang: 'html',
      code: `
      <ngx-terminal 
        [height]="'350px'" 
        [width]="'100%'" 
        [window]=" window" 
        [nativeCommands]="true" 
        [history]="true"
        [noEmptyCommand]="true" 
        [customCommands]="customCommands">
      </ngx-terminal>
      `
    },
    {
      fileName: 'ts',
      lang: 'ts',
      code: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-demo-terminal',
        templateUrl: './demo-terminal.component.html',
        styleUrls: ['./demo-terminal.component.scss']
      })
      export class DemoTerminalComponent {
        window = { show: true, title: 'EasyTerminal' };
        customCommands = [
          {
            name: 'infos',
            help: 'echo infos',
            method: async function (cmd: any) {
              cmd.echo('Its a terminal');
            }
          }
        ]
      }
`
    },
  ]
}

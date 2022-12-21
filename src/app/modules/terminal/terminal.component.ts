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

  interfaces = `
  #### Terminal Config
  | name           | type             | default | desc                                                 |
  | -------------- | ---------------- | ------- | ---------------------------------------------------- |
  | window         | Object           | N/A     | Some style for the termianal                         |
  | welcome        | String           | null    | Welcome message (first line)                         |
  | elementHtml    | HTMLElement      | null    | div where you want the terminal                      |
  | data-ps        | string           | $       | Char before command input                            |
  | history        | boolean          | false   | If yes you can access history with arrow up and down |
  | noEmptyCommand | boolean          | false   | If true cancel empty command                         |
  | nativeCommands | boolean          | false   | Native commands are help and clear                   |
  | customCommands | ITerminalCommand | N/A     | Pass you're commands here                            |

  #### Window interface
  | name      | type    | default        | desc                |
  | --------- | ------- | -------------- | ------------------- |
  | show      | boolean | false          | Show a window       |
  | title     | string  | 'EasyTerminal' | Title of the window |
  | bgColor   | string  | #198754        | Background color    |
  | textColor | string  | white          | Text color          |

  #### ITerminalCommand interface
  | name   | type     | required | desc                      |
  | ------ | -------- | -------- | ------------------------- |
  | name   | string   | true     | Command name              |
  | method | function | true     | function called           |
  | help   | string   | true     | Text show on help command |
`
}

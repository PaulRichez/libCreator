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

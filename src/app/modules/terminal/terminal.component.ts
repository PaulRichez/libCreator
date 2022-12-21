import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  window = { show: true, title: 'EasyTerminal' };
  customCommands = [
    {
      name: 'askAge',
      help: 'ask age to user',
      method: async function (cmd: any) {
        const age = await cmd.ask('age ?', true);
        cmd.echo('Age: ' + age);
      }
    }
  ]

}

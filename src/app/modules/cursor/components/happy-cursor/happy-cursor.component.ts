import { Component } from '@angular/core';

@Component({
  selector: 'app-happy-cursor',
  templateUrl: './happy-cursor.component.html',
  styleUrls: ['./happy-cursor.component.scss']
})
export class HappyCursorComponent {
  cursors = [
    {
      name: 'happy',
      url: 'assets/cursor/happy.svg',
    },
    {
      name: 'meh',
      url: 'assets/cursor/meh.svg',
    },
    {
      name: 'sad',
      url: 'assets/cursor/sad.svg',
    },
  ]
}

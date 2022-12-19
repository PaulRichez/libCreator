import { Component } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  usageCode = `
  <span ngCursor="pointer"[ngCursorImportant]="true">Pointer</span> <!-- cursor pointer with !important -->
  <span ngCursor="pointer!important">Pointer</span> <!-- same but without use the input cursorImportant -->
  <span ngCursor="url(assets/cursor/heart.svg)">heart</span> <!-- cursor from asset -->
  <span ngCursor="url(assets/cursor/heart.svg)!important">heart</span> <!-- cursor from asset && link can be used with !important too -->
  <span ngCursor="url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png)">happy</span> <!-- cursor from link -->`;

}

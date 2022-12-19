import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-cursor',
  templateUrl: './dynamic-cursor.component.html',
  styleUrls: ['./dynamic-cursor.component.scss']
})
export class DynamicCursorComponent {
  dynamicCursor = 'auto';
  dynamicCursorCode = ` 
  <div [ngCursor]="dynamicCursor">
    <span>this element get the cursor : {{ dynamicCursor }}</span>
  </div>
  <div>
    <select [(ngModel)]="dynamicCursor">
        <option *ngFor="let cursor of cursors" [value]="cursor">{{ cursor }}</option>
    </select>
  </div>`;

  cursors = [
    'auto',
    'default',
    'none',
    'context-menu',
    'help',
    'pointer',
    'progress',
    'wait',
    'cell',
    'crosshair',
    'text',
    'vertical-text',
    'alias',
    'copy',
    'move',
    'no-drop',
    'not-allowed',
    'all-scroll',
    'col-resize',
    'row-resize',
    'n-resize',
    's-resize',
    'e-resize',
    'w-resize',
    'ns-resize',
    'ew-resize',
    'ne-resize',
    'nw-resize',
    'se-resize',
    'sw-resize',
    'nesw-resize',
    'nwse-resize',
  ]
}

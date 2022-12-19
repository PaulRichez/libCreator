import { Component } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  usageCodeImport = `
  import { NgCursorModule } from 'ng-cursor';
  ...
  imports: [
    NgCursorModule,
  }
  `;

  usageCode = `
  <span ngCursor="pointer"[ngCursorImportant]="true">Pointer</span> <!-- cursor pointer with !important -->
  <span ngCursor="pointer!important">Pointer</span> <!-- same but without use the input cursorImportant -->
  <span ngCursor="url(assets/cursor/heart.svg)">heart</span> <!-- cursor from asset -->
  <span ngCursor="url(assets/cursor/heart.svg)!important">heart</span> <!-- cursor from asset && link can be used with !important too -->
  <span ngCursor="url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.svg)">happy</span> <!-- cursor from link -->`;

  dynamicCode = [
    {
      fileName: 'html',
      lang: 'html',
      code: `
      <div class="flex-row align-center">
        <div [ngCursor]="dynamicCursor" class="dynamic-cursor">
         <span>this element get the cursor : {{ dynamicCursor }}</span>
        </div>
        <div>
          <mat-form-field appearance="fill">
              <mat-select [(ngModel)]="dynamicCursor">
                  <mat-option *ngFor="let cursor of cursors" [value]="cursor">{{ cursor }}</mat-option>
              </mat-select>
          </mat-form-field>
         </div>
        </div>`
    },
    {
      fileName: 'css',
      lang: 'css',
      code: `
      .dynamic-cursor {
        background-color: #5885AF;
        padding: 10px;
        margin-right: 10px
      }`
    },
    {
      fileName: 'ts',
      lang: 'ts',
      code: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-dynamic-cursor',
        templateUrl: './dynamic-cursor.component.html',
        styleUrls: ['./dynamic-cursor.component.scss']
      })
      export class DynamicCursorComponent {
        dynamicCursor = 'auto';
        dynamicCursorCode = \` 
        <div [ngCursor]="dynamicCursor">
          <span>this element get the cursor : {{ dynamicCursor }}</span>
        </div>
        <div>
          <select [(ngModel)]="dynamicCursor">
              <option *ngFor="let cursor of cursors" [value]="cursor">{{ cursor }}</option>
          </select>
        </div>\`;

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
`
    }
  ]

  happyCode = [
    {
      fileName: 'html',
      lang: 'html',
      code: `
      <div class="flex flex-row around">
        <div *ngFor="let cursor of cursors" [ngCursor]="'url(' + cursor.url +')'" style="padding:10px; background-color: #5885AF;">
          <span>{{ cursor.name }}</span>
        </div>
      </div>
      `
    },
    {
      lang: 'ts',
      fileName: 'ts',
      code: `
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
      `
    }
  ]
}

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ngCursor]'
})
export class NgCursorDirective implements OnChanges {
  @Input('ngCursor') cursor: string = 'auto';
  @Input('ngCursorImportant') cursorImportant: boolean = false;
  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setCursor();
  }

  setCursor() {
    let cursor = this.cursor;
    if (cursor.includes('!important')) {
      this.cursorImportant = true;
      cursor = cursor.replace('!important', '').trim();
    }
    if (cursor.startsWith('url(') && !cursor.includes(',')) {
      cursor += ' , auto';
    }
    this.el.nativeElement.style.setProperty("cursor", cursor, this.cursorImportant ? 'important' : '');
  }

}

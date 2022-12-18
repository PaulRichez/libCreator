import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INgGalleryOptions } from './models/INgGalleryOptions.model';

@Component({
  selector: 'lib-ng-gallery-inline',
  templateUrl: './ng-gallery-inline.component.html',
  styleUrls: ['./ng-gallery-inline.component.scss']
})
export class NgGalleryInlineComponent implements OnInit {
  @Input() galleryOptions!: INgGalleryOptions;
  @Input() index!: number | string;
  @Output() indexChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    if (!this.index) this.index = 0;
  }
}

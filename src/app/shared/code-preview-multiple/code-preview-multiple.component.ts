import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-preview-multiple',
  templateUrl: './code-preview-multiple.component.html',
  styleUrls: ['./code-preview-multiple.component.scss']
})
export class CodePreviewMultipleComponent {
  @Input() link!: string;
  @Input() codes: any[] = [];
}

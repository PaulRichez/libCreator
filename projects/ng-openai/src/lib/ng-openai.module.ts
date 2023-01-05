import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgOpenaiService } from './ng-openai.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class NgOpenaiModule {
  constructor() { }
  static forRoot(config: string): ModuleWithProviders<NgOpenaiModule> {
    return {
      ngModule: NgOpenaiModule,
      providers: [NgOpenaiService, { provide: 'config', useValue: config }]
    };
  }
}

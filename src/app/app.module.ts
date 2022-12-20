import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HighlightModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml'),
          css: () => import('highlight.js/lib/languages/css'),

        },
        themePath: 'node_modules/highlight.js/styles/atom-one-dark.css',
      }
    }
  ],
})
export class AppModule { }

import { Component } from '@angular/core';
// import { NgThemeSystemService } from 'projects/ng-theme-system/src/public-api';
import { NgThemeSystemService } from 'ng-theme-system';

@Component({
  selector: 'app-theme-system',
  templateUrl: './theme-system.component.html',
  styleUrls: ['./theme-system.component.css'],
})
export class ThemeSystemComponent {
  usageCodeImport = `
  import { NgThemeSystemService } from 'ng-theme-system';
  imports: [
    NgThemeSystemModule,
  ]
  `
  usageCode = `
  import { NgThemeSystemService } from 'ng-theme-system';

  constructor(private themeSystemService: NgThemeSystemService) {
    console.log('isDarkTheme', this.themeSystemService.isDarkTheme());
    console.log('isLightTheme', this.themeSystemService.isLightTheme());
    console.log('currentTheem', this.themeSystemService.getSytemTheme());
    this.themeSystemService.listenSystemTheme().subscribe((theme) => {
      console.log('themeChangeListener', theme);
    });
  }
  `;

  demoCode = [
    {
      fileName: 'html',
      lang: 'html',
      code: `
      <button mat-button [matMenuTriggerFor]="menu">Pick a theme</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="changeTheme('system')">System</button>
        <button mat-menu-item (click)="changeTheme('dark')">Dark</button>
        <button mat-menu-item (click)="changeTheme('light')">Light</button>
      </mat-menu>
      <div class="container" [ngClass]="themeValue">
        <div>
          <span>ThemeSystem is {{ themeSystem }}</span><br>
          <span>Theme is {{ themeValue }}</span>
          <span *ngIf="themeSelected == 'system'"> From theme system</span>
        </div>
      </div>

      `
    },
    {
      filename: 'css',
      lang: 'css',
      code: `
      .light {
        background-color: white !important;
        color: black !important;
      }

      .dark {
        background-color: black !important;
        color: white !important;
      }`
    },
    {
      fileName: 'ts',
      lang: 'ts',
      code: `
      import { Component } from '@angular/core';
import { NgThemeSystemService } from 'ng-theme-system';

@Component({
  selector: 'app-demo-ng-theme-system',
  templateUrl: './demo-ng-theme-system.component.html',
  styleUrls: ['./demo-ng-theme-system.component.css'],
})
export class DemoNgThemeSystemComponent {
  public themeSelected  = 'system';
  public themeValue = 'light';
  public themeSystem = 'light';
  constructor(private themeSystemService: NgThemeSystemService) {
    this.themeSystemService.listenSystemTheme().subscribe((theme) => {
      console.log('demotheme', theme);
      this.themeSystem = theme;
      if (this.themeSelected == 'system') {
        this.themeValue = theme;
      }
    });
   }

  public changeTheme(theme: string) {
    this.themeSelected = theme;
    if (theme === 'system') {
      this.themeValue = this.themeSystem;
    } else {
      this.themeValue = theme;
    }
  }

}

`
    },
  ]
  public interfaces = `
  | name              | type                    | default | desc                                                                     |
  | ----------------- | ----------------------- | ------  | ------------------------------------------------------------------------ |
  | getSytemTheme     | function return strinng | N/A     | return 'light' or 'dark'                                                 |
  | isLightTheme      | function return boolean | N/A     | return true if system theme is light                                     |
  | isDarkTheme       | function return boolean | N/A     | return true if system theme is dark                                      |
  | listenSystemTheme | Observable<'string'>    | N/A     | Observable which listen the change with boolean for initial value or not |
`;
  constructor(private themeSystemService: NgThemeSystemService) {
    console.log('isDarkTheme', this.themeSystemService.isDarkTheme());
    console.log('isLightTheme', this.themeSystemService.isLightTheme());
    console.log('currentTheem', this.themeSystemService.getSytemTheme());
    this.themeSystemService.listenSystemTheme().subscribe((theme) => {
      console.log('themeChangeListener', theme);
    });
  }
}

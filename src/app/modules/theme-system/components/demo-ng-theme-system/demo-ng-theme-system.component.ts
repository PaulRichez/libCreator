import { Component } from '@angular/core';
import { NgThemeSystemService } from 'ng-theme-system';

@Component({
  selector: 'app-demo-ng-theme-system',
  templateUrl: `./demo-ng-theme-system.component.html`,
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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgThemeSystemService {

  constructor() { }

  public getSytemTheme(): string {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  public isLightTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }

  public isDarkTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public listenSystemTheme(sendInitialValue: boolean = true): Observable<string> {
    return new Observable<string>((observer) => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (event: MediaQueryListEvent) => {
        observer.next(event.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', listener);
      if (sendInitialValue) observer.next(mediaQuery.matches ? 'dark' : 'light');
      return () => mediaQuery.removeEventListener('change', listener);
    });
  }
}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService
{
  private palette = localStorage.getItem('palette')
  ?? JSON.stringify({
    'color': '#2c82a7',
    'bgImage': 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)'
  });

  public darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  public palette$ = new BehaviorSubject(JSON.parse(this.palette));
  public font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');
  public blur$ = new BehaviorSubject(localStorage.getItem('blur') ?? 'off');

  constructor(private translate: TranslateService) { }

  setDarkMode = (value: string) => this.darkMode$.next(value);
  setPalette = (value: any) => this.palette$.next(value);
  setFont = (value: string) => this.font$.next(value);
  setBlur = (value: string) => this.blur$.next(value);
}

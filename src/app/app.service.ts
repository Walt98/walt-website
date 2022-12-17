import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService
{
  // SET DEFAULT PALETTE
  private palette = localStorage.getItem('palette')
  ?? JSON.stringify({
    'color': 'default',
    'bgImage': 'linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)'
  });

  // BEHAVIOR SUBJECTS
  public darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  public palette$ = new BehaviorSubject(JSON.parse(this.palette));
  public font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');
  public blur$ = new BehaviorSubject(localStorage.getItem('blur') ?? 'off');

  constructor() { }

  // NEXTS
  public setDarkMode = (value: string) => this.darkMode$.next(value);
  public setPalette = (value: any) => this.palette$.next(value);
  public setFont = (value: string) => this.font$.next(value);
  public setBlur = (value: string) => this.blur$.next(value);
}

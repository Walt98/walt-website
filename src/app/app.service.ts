import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService
{
  public darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  public palette$ = new BehaviorSubject(JSON.parse(localStorage.getItem('palette') ?? ''));
  public font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');

  constructor() { }

  setDarkMode = (value: string) => this.darkMode$.next(value);
  setPalette = (value: any) => this.palette$.next(value);
  setFont = (value: string) => this.font$.next(value);
}

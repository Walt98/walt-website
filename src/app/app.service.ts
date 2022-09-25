import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService
{
  public darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  public palette$ = new BehaviorSubject(JSON.parse(localStorage.getItem('palette') ?? ''));

  constructor() { }

  setDarkMode = (value: string) => this.darkMode$.next(value);
  setPalette = (value: any) => this.palette$.next(value);
}

import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit
{
  public darkModeBS$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');

  public palette: any;

  // PALETTE
  public palette$ = new Subject();
  public paletteApp$ = new Subject();
  
  constructor() { }

  ngOnInit(): void
  {
    
  }

  darkModeBS = (value: string) => this.darkModeBS$.next(value);

  setPalette(): any
  {
    let palette: any;
    if (!localStorage.getItem('palette'))
    {
      palette = {'color': '#2c82a7', 'bgImage': 'linear-gradient(147.38deg, #4C96B6 0%, #19496C 100%)'};
      localStorage.setItem('palette', JSON.stringify(palette));
    }
    else palette = JSON.parse(localStorage.getItem('palette') ?? '');
    return palette;
  }
  setPalette$(value: any)
  {
    localStorage.setItem('palette', JSON.stringify(value));
    this.palette = value;
    this.palette$.next(value);
  }
}

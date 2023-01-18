import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { INavbarItem } from 'src/models/navbar-item';

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
  public palette$ = new BehaviorSubject(JSON.parse(this.palette) as IPalette);
  public font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');
  public blur$ = new BehaviorSubject(localStorage.getItem('blur') ?? 'on');
  public breakpoint$ = new BehaviorSubject(false);

  // CONSTANTS
  public readonly colors = ['default', 'green', 'yellow', 'red', 'purple'];
  public readonly navbarItems: INavbarItem[] = [
    { link: "home", icon: "house", text: "Home" },
    { link: "about-me", icon: "person-circle", text: "aboutMe" },
    { link: "contact-me", icon: "send", text: "contactMe" },
    { link: "technologies", icon: "code-slash", text: "technologies" }
  ];

  constructor(private breakpoint: BreakpointObserver)
  {
    // BREAKPOINT
    this.breakpoint.observe("(min-width: 992px)").subscribe(r => this.breakpoint$.next(r.matches));
  }

  // NEXTS
  public setDarkMode = (value: string) => this.darkMode$.next(value);
  public setPalette = (value: IPalette) => this.palette$.next(value);
  public setFont = (value: string) => this.font$.next(value);
  public setBlur = (value: string) => this.blur$.next(value);
}

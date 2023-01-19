import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { INavbarItem } from 'src/models/navbar-item';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppService
{
  // SET DEFAULT PALETTE
  protected palette = localStorage.getItem('palette')
  ?? JSON.stringify({
    'color': 'default',
    'bgImage': 'linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)'
  });

  // SET BREAKPOINT
  protected breakpoint$ = this.breakpointObserver.observe("(min-width: 992px)");

  // BEHAVIOR SUBJECTS
  public readonly behavSubjects$ =
  {
    darkMode$: new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off'),
    palette$: new BehaviorSubject(JSON.parse(this.palette) as IPalette),
    font$: new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat'),
    blur$: new BehaviorSubject(localStorage.getItem('blur') ?? 'on'),
    breakpoint$: new BehaviorSubject(false)
  }

  // CONSTANTS
  public readonly constants =
  {
    colors: ['default', 'green', 'yellow', 'red', 'purple'],
    fonts: ['Montserrat', 'Roboto'],
    langs: ['it', 'gb'],
    navbarItems: [
      { link: "home", icon: "house", text: "Home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ] as INavbarItem[]
  }

  // FUNCTIONS
  public readonly set =
  {
    darkMode: (darkMode: string) => this.behavSubjects$.darkMode$.next(darkMode),
    palette: (palette: IPalette) => this.behavSubjects$.palette$.next(palette),
    font: (font: string) => this.behavSubjects$.font$.next(font),
    blur: (blur: string) => this.behavSubjects$.blur$.next(blur)
  }

  constructor(
    protected breakpointObserver: BreakpointObserver,
    // ALL SERVICES
    public title: Title,
    public router: Router,
    public translate: TranslateService
  ) {
    // BREAKPOINT
    this.breakpoint$.subscribe(r => this.behavSubjects$.breakpoint$.next(r.matches));
  }
}

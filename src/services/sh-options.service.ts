import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { INavbarItem } from 'src/models/navbar-item';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { $ } from 'src/models/$';

@Injectable({
  providedIn: 'root'
})
export class ShOptions
{
  // DEFAULT PALETTE
  protected palette = localStorage.getItem('palette')
  ?? JSON.stringify({
    'color': 'default',
    'bgImage': 'linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)'
  });

  // BEHAVIOR SUBJECTS
  protected darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  protected palette$ = new BehaviorSubject(JSON.parse(this.palette) as IPalette);
  protected font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');
  protected blur$ = new BehaviorSubject(localStorage.getItem('blur') ?? 'on');
  protected breakpoint$ = new BehaviorSubject(false);

  // BREAKPOINT OBSERVABLE
  protected breakpoint = this._breakpointObserver.observe("(min-width: 992px)");

  /** Constants */
  public CONSTS =
  {
    COLORS: ['default', 'green', 'yellow', 'red', 'purple'],
    FONTS: ['Montserrat', 'Roboto'],
    LANGUAGES: ['it', 'gb'],
    NAVBAR_ITEMS: [
      { link: "home", icon: "house", text: "Home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ] as INavbarItem[]
  }

  /** Customizers reading and writing. */
  public $: $ =
  {
    get:
    {
      darkMode: (next: (value: string) => void) => this.darkMode$.subscribe(next),
      palette: (next: (value: IPalette) => void) => this.palette$.subscribe(next),
      font: (next: (value: string) => void) => this.font$.subscribe(next),
      blur: (next: (value: string) => void) => this.blur$.subscribe(next),
      breakpoint: (next: (value: boolean) => void) => this.breakpoint$.subscribe(next)
    },

    set:
    {
      darkMode: (value: string) => this.darkMode$.next(value),
      palette: (value: IPalette) => this.palette$.next(value),
      font: (value: string) => this.font$.next(value),
      blur: (value: string) => this.blur$.next(value)
    }
  };

  constructor(
    protected _breakpointObserver: BreakpointObserver,
    // PUBLIC SERVICES
    public _title: Title,
    public _router: Router,
    public _translate: TranslateService
  ) {
    // BREAKPOINT
    this.breakpoint.subscribe(state => this.breakpoint$.next(state.matches));
  }
}

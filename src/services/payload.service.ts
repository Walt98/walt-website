import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { $ } from 'src/models/get-set';

@Injectable({
  providedIn: 'root'
})
export class PayloadService
{
  private private =
  {
    darkMode$: new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off'),
    palette$: new BehaviorSubject<IPalette>(JSON.parse(localStorage.getItem('palette') ?? '{"color": "default", "bgImage": "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)"}')),
    font$: new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat'),
    blur$: new BehaviorSubject(localStorage.getItem('blur') ?? 'on'),
    breakpoint$: new BehaviorSubject(true),
    
    breakpoint: this._breakpointObserver.observe("(min-width: 992px)")
  }
  
  /** Customizers' reading and writing. */
  public $: $ =
  {
    Get:
    {
      DarkMode: next => this.private.darkMode$.subscribe(next ?? (() => {})),
      Palette: next => this.private.palette$.subscribe(next ?? (() => {})),
      Font: next => this.private.font$.subscribe(next ?? (() => {})),
      Blur: next => this.private.blur$.subscribe(next ?? (() => {})),
      Breakpoint: next => this.private.breakpoint$.subscribe(next ?? (() => {}))
    },

    Set:
    {
      DarkMode: value =>
      {
        localStorage.setItem("darkMode", value);
        this.private.darkMode$.next(value);
      },
      Palette: value =>
      {
        localStorage.setItem("palette", JSON.stringify(value));
        this.private.palette$.next(value);
      },
      Font: value =>
      {
        localStorage.setItem("font", value);
        this.private.font$.next(value);
      },
      Blur: value =>
      {
        localStorage.setItem("blur", value);
        this.private.blur$.next(value);
      }
    }
  };

  constructor(
    private _breakpointObserver: BreakpointObserver,
    // PUBLIC SERVICES
    public _title: Title,
    public _router: Router,
    public _translate: TranslateService
  ) {
    // BREAKPOINT
    this.private.breakpoint.subscribe(state => this.private.breakpoint$.next(state.matches));
    
    // TRANSLATE
    _translate.setDefaultLang('it');
    _translate.use(localStorage.getItem('lang') ?? 'it');
  }
}

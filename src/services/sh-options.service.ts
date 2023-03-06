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
export class ShOptions
{
  private safe =
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
    get:
    {
      darkMode: next => this.safe.darkMode$.subscribe(next),
      palette: next => this.safe.palette$.subscribe(next),
      font: next => this.safe.font$.subscribe(next),
      blur: next => this.safe.blur$.subscribe(next),
      breakpoint: next => this.safe.breakpoint$.subscribe(next)
    },

    set:
    {
      darkMode: value => this.safe.darkMode$.next(value),
      palette: value => this.safe.palette$.next(value),
      font: value => this.safe.font$.next(value),
      blur: value => this.safe.blur$.next(value)
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
    this.safe.breakpoint.subscribe(state => this.safe.breakpoint$.next(state.matches));
    
    _translate.setDefaultLang('it');
    _translate.use(localStorage.getItem('lang') ?? 'it');
  }
}

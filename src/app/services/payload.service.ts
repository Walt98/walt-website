import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IPalette } from 'src/app/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IPayloadBehavior$ } from 'src/app/models/payload-behavior';

@Injectable({
  providedIn: 'root'
})
export class PayloadService
{
  private private =
  {
    // BEHAVIOR SUBJECTS
    darkMode$: new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off'),
    palette$: new BehaviorSubject<IPalette>(JSON.parse(localStorage.getItem('palette') ?? '{"color": "default", "bgImage": "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)"}')),
    font$: new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat'),
    blur$: new BehaviorSubject(localStorage.getItem('blur') ?? 'on'),
    breakpoint$: new BehaviorSubject(true),

    // SUBJECTS
    route$: new Subject<string>(),
    
    // OBSERVABLES
    breakpoint: this._breakpointObserver.observe("(min-width: 992px)")
  }
  
  /** Object used to get/set customization params. */
  public $: IPayloadBehavior$ =
  {
    get:
    {
      darkMode: next => this.private.darkMode$.subscribe(next),
      palette: next => this.private.palette$.subscribe(next),
      font: next => this.private.font$.subscribe(next),
      blur: next => this.private.blur$.subscribe(next),
      route: next => this.private.route$.subscribe(next),
      breakpoint: next => this.private.breakpoint$.subscribe(next)
    },

    set:
    {
      darkMode: value =>
      {
        localStorage.setItem("darkMode", value);
        this.private.darkMode$.next(value);
      },
      palette: value =>
      {
        localStorage.setItem("palette", JSON.stringify(value));
        this.private.palette$.next(value);
      },
      font: value =>
      {
        localStorage.setItem("font", value);
        this.private.font$.next(value);
      },
      blur: value =>
      {
        localStorage.setItem("blur", value);
        this.private.blur$.next(value);
      },
      route: value => this.private.route$.next(value)
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

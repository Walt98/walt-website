import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  // BEHAVIOR SUBJECTS
  private darkMode$ = new BehaviorSubject(localStorage.getItem('darkMode') ?? 'off');
  private palette$ = new BehaviorSubject<IPalette>(JSON.parse(localStorage.getItem('palette') ?? '{"color": "default", "bgImage": "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)"}'));
  private font$ = new BehaviorSubject(localStorage.getItem('font') ?? 'Montserrat');
  private blur$ = new BehaviorSubject(localStorage.getItem('blur') ?? 'on');
  private route$ = new BehaviorSubject("");
  private breakpoint$ = new BehaviorSubject(true);

  // OBSERVABLES
  private breakpoint = this._breakpointObserver.observe("(min-width: 992px)");
  
  /** Object used to get/set customization params. */
  public $: IPayloadBehavior$ =
  {
    get:
    {
      darkMode: next => this.darkMode$.subscribe(next),
      palette: next => this.palette$.subscribe(next),
      font: next => this.font$.subscribe(next),
      blur: next => this.blur$.subscribe(next),
      route: next => this.route$.subscribe(next),
      breakpoint: next => this.breakpoint$.subscribe(next)
    },

    set:
    {
      darkMode: value =>
      {
        localStorage.setItem("darkMode", value);
        this.darkMode$.next(value);
      },
      palette: value =>
      {
        localStorage.setItem("palette", JSON.stringify(value));
        this.palette$.next(value);
      },
      font: value =>
      {
        localStorage.setItem("font", value);
        this.font$.next(value);
      },
      blur: value =>
      {
        localStorage.setItem("blur", value);
        this.blur$.next(value);
      },
      route: value => this.route$.next(value)
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
    this.breakpoint.subscribe(state => this.breakpoint$.next(state.matches));
    
    // TRANSLATE
    _translate.setDefaultLang('it');
    _translate.use(localStorage.getItem('lang') ?? 'it');
  }
}

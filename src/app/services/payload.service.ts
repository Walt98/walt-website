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
  private palette$ = new BehaviorSubject<IPalette>(JSON.parse(localStorage.getItem("palette") ?? '{"color": "default", "bgImage": "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)"}'));
  private darkMode$ = new BehaviorSubject(localStorage.getItem("darkMode") ?? "off");
  private textSize$ = new BehaviorSubject(localStorage.getItem("textSize") ?? "1");
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
      textSize: next => this.textSize$.subscribe(next),
      route: next => this.route$.subscribe(next),
      breakpoint: next => this.breakpoint$.subscribe(next)
    },

    set:
    {
      darkMode: value => this.setStorageAndNextValue("darkMode", value),
      palette: value => this.setStorageAndNextValue("palette", value),
      textSize: value => this.setStorageAndNextValue("textSize", value),
      route: value => this.setStorageAndNextValue("route", value)
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
    _translate.setDefaultLang("it");
    _translate.use(localStorage.getItem("lang") ?? "it");
  }

  /**
   * Set the item in localStorage if *property* is different from "route" and emits it to subscriptions.
   * @param property Make sure is has the same name of the BehaviorSubject
   * @param value Value to set and emit
   */
  private setStorageAndNextValue(property: string, value: string | IPalette)
  {
    const behavior = this[`${property}$` as keyof this] as unknown as BehaviorSubject<string | IPalette>;
    const valueStr = typeof value === "string" ? value : JSON.stringify(value);

    if (property !== "route") localStorage.setItem(property, valueStr);

    behavior.next(value);
  }
}

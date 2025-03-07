import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPalette } from 'src/app/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ISetter$ } from 'src/app/models/payload-setter';

@Injectable({
  providedIn: 'root'
})
export class PayloadService
{
  // BEHAVIOR SUBJECTS
  private breakpoint = new BehaviorSubject(true);
  private palette = new BehaviorSubject<IPalette>(JSON.parse(localStorage.getItem("palette") ?? '{"color": "default", "bgImage": "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)"}'));
  private darkMode = new BehaviorSubject(localStorage.getItem("darkMode") ?? "off");
  private textSize = new BehaviorSubject(localStorage.getItem("textSize") ?? "1");

  // OBSERVABLES
  private breakpointState$ = this._breakpointObserver.observe("(min-width: 992px)");
  public breakpoint$ = this.breakpoint.asObservable();
  public palette$ = this.palette.asObservable();
  public darkMode$ = this.darkMode.asObservable();
  public textSize$ = this.textSize.asObservable();

  /** Customization params setter. */
  public set$: ISetter$ =
  {
    palette: value => this.setStorageAndNextValue("palette", value),
    darkMode: value => this.setStorageAndNextValue("darkMode", value),
    textSize: value => this.setStorageAndNextValue("textSize", value)
  }

  constructor(
    private _breakpointObserver: BreakpointObserver,
    // PUBLIC SERVICES
    public _title: Title,
    public _router: Router,
    public _translate: TranslateService
  ) {
    // BREAKPOINT
    this.breakpointState$.subscribe(state => this.breakpoint.next(state.matches));

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
    const behavior = this[property as keyof this] as unknown as BehaviorSubject<string | IPalette>;
    const valueStr = typeof value === "string" ? value : JSON.stringify(value);

    localStorage.setItem(property, valueStr);
    behavior.next(value);
  }
}

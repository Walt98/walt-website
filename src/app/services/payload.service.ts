import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { IPalette } from 'src/app/models/palette';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ISetter$ } from 'src/app/models/payload-setter';
import { IRoutes } from '../models/routesTranslations';

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

  /** Contains all translations; the first is the italian one. */
  public routes!: IRoutes;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    // PUBLIC SERVICES
    public _title: Title,
    public _translate: TranslateService
  ) {
    this.useBreakpoint();
    this.useTranslate();
  }

  /** Subscribe the *_breakpointObserver* service observable. */
  private useBreakpoint()
  {
    this._breakpointObserver
      .observe("(min-width: 992px)")
      .subscribe(state => this.breakpoint.next(state.matches));
  }

  /** Set the default and initial language and get all translations. */
  private useTranslate()
  {
    this._translate.setDefaultLang("it");
    this._translate.use(localStorage.getItem("lang") ?? "it").pipe(first());
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

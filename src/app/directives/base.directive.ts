import { Directive, OnDestroy } from '@angular/core';
import { ICustomizer, ICustomizerUpdater } from 'src/app/models/customizer';
import { PayloadService } from 'src/app/services/payload.service';
import { first, Observable, Subject, takeUntil } from 'rxjs';
import { INavigationParams } from '../models/navigation-params';
import { IPalette } from '../models/palette';

@Directive({ selector: "base" })
export class BaseDirective implements OnDestroy
{
  /** Read-only navigation parameters. */
  public readonly PARAMS: INavigationParams =
  {
    COLORS: ["default", "green", "yellow", "red", "purple"],
    LANGUAGES: ["it", "gb"],
    NAVBAR_ITEMS: [
      { link: "home", icon: "house", text: "home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ]
  };

  /** An object that contains all customization params. */
  public Customizer: ICustomizer =
  {
    Breakpoint: true,
    Palette: { color: "default", bgImage: "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)" },
    DarkMode: false,
    TextSize: "1"
  };

  public destroy$ = new Subject<void>();

  public $: ICustomizerUpdater =
  {
    Breakpoint: (callback?: () => void) => this.subscribe("breakpoint$", callback),
    Palette: (callback?: () => void) => this.subscribe("palette$", callback),
    DarkMode: (callback?: () => void) => this.subscribe("darkMode$", callback),
    TextSize: (callback?: () => void) => this.subscribe("textSize$", callback)
  }

  constructor(
    /** Project service. */
    public _payload: PayloadService
  ) { }

  ngOnDestroy(): void
  {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Subscribe the behavior subject and update its Customizer param.
   * @param bSub$ 
   * @param callback 
   */
  private subscribe(bSub$: keyof PayloadService, callback?: () => void)
  {
    const name = (bSub$[0].toUpperCase() + bSub$.slice(1, bSub$.length - 1)) as keyof ICustomizer;
    const behavior = this._payload[bSub$] as Observable<any>;

    behavior
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => this.update(name, value, callback));
  }

  /** Update Customizer fields and use a callback if it exists. */
  private update(param: keyof ICustomizer, value: string | boolean | IPalette, callback?: () => void)
  {
    switch (param)
    {
      case "Breakpoint": this.Customizer[param] = !!value; break;
      case "Palette": this.Customizer[param] = value as IPalette; break;
      case "DarkMode": this.Customizer[param] = value === "on"; break;
      case "TextSize": this.setTextSize(value + ""); break;
      default: return;
    }

    if (!!callback) callback();
  }

  private setTextSize(value: string)
  {
    this.Customizer.TextSize = value;
    document.documentElement.style.setProperty("--font-scale", value);
  }

  /** Set the first char to uppercase. */
  public firstUpper = (str: string) => str[0].toUpperCase() + str.slice(1);

  /**
   * Set the current HTML document title.
   * @param it Italian title
   * @param en English title; if it doesn't exist, the title will not be changed on change language
  */
  public setTitle(it: string, en?: string)
  {
    // Set it on initialization
    const routeInit = this._payload._translate.currentLang === "it" ? it : en;
    this._payload._title.setTitle(`${routeInit} | WaltWebsite`);

    if (!!en)
    {
      this._payload._translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(e =>
      {
        const res = e.lang === "it" ? it : en;
        this._payload._title.setTitle(`${res} | WaltWebsite`);
      });
    }
  }
}

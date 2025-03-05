import { Directive, OnDestroy } from '@angular/core';
import { ICustomizer, ICustomizerUpdater } from 'src/app/models/customizer';
import { PayloadService } from 'src/app/services/payload.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
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
      { link: "", icon: "house", text: "home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ]
  };

  /** An object that contains all customization params. */
  public Customizer: ICustomizer =
  {
    Palette: { color: "default", bgImage: "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)" },
    DarkMode: false,
    TextSize: "1",
    Breakpoint: true
  };

  public destroy$ = new Subject<void>();

  constructor(
    /** Payload service used to get/set customization params or to use external services. */
    public _payload: PayloadService
  ) { }

  ngOnDestroy(): void
  {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Set the title of the current HTML document based on the translation of the parameter.
   * @param route
   */
  public setTitle(route: string)
  {
    if (route === "") route = "home";
    let arr = route.split("-");
    if (arr.length > 1) arr[1] = "Me";

    this._payload._translate
      .stream(`window.routes.${arr.join("")}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: string) =>
        this._payload._title.setTitle(`${value} | WaltWebsite`));
  }

  public $: ICustomizerUpdater =
  {
    Palette: (callback?: () => void) => this.subscribe("palette$", callback),
    DarkMode: (callback?: () => void) => this.subscribe("darkMode$", callback),
    TextSize: (callback?: () => void) => this.subscribe("textSize$", callback),
    Breakpoint: (callback?: () => void) => this.subscribe("breakpoint$", callback),
    Route: () => this.subscribe("route$")
  }

  /**
   * Subscribe the behavior subject and update its Customizer param.
   * @param bSub$ 
   * @param callback 
   */
  private subscribe(bSub$: keyof PayloadService, callback?: () => void)
  {
    const name = (bSub$[0].toUpperCase() + bSub$.slice(1, bSub$.length - 1)) as keyof ICustomizer;
    const behavior = this._payload[bSub$] as BehaviorSubject<any>;

    behavior
      .pipe(takeUntil(this.destroy$))
      .subscribe(value =>
        bSub$ === "route$" ? this.setTitle(value) : this.update(name, value, callback));
  }

  /** Update Customizer fields and use a callback if it exists. */
  private update(param: keyof ICustomizer, value: string | boolean | IPalette, callback?: () => void)
  {
    switch (param)
    {
      case "DarkMode": this.Customizer[param] = value === "on"; break;
      case "Palette": this.Customizer[param] = value as IPalette; break;
      case "Breakpoint": this.Customizer[param] = !!value; break;
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
}

import { Component, OnDestroy } from '@angular/core';
import { ICustomizationParams } from 'src/app/models/customizer';
import { PayloadService } from 'src/app/services/payload.service';
import { Subject, takeUntil } from 'rxjs';
import { INavigationParams } from './models/navigation-params';
import { ICustomizerUpdater } from './models/customizer-setter';

@Component({ template: `` })
export class BaseComponent implements OnDestroy
{
  /** Read-only navigation parameters. */
  public readonly PARAMS: INavigationParams =
  {
    COLORS: ["default", "green", "yellow", "red", "purple"],
    FONTS: ["Montserrat", "Roboto"],
    LANGUAGES: ["it", "gb"],
    NAVBAR_ITEMS: [
      { link: "", icon: "house", text: "home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ]
  };

  /** An object that contains all customization params. */
  public Customizer: ICustomizationParams =
  {
    Palette: { color: "default", bgImage: "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)" },
    DarkMode: false,
    Font: "Montserrat",
    TextSlider: "1",
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

  /** Sets the title of the current HTML document based on the translation of the parameter.
   * @param route
   */
  public setTitle(route: string)
  {
    if (route === "") route = "Home";
    let arr = route.split("-");
    if (arr.length > 1) arr[1] = "Me";

    this._payload._translate.stream(arr.join("")).pipe(takeUntil(this.destroy$)).subscribe(
      (value: string) => this._payload._title.setTitle(`${value} | WaltWebsite`)
    );
  }

  /** Object used to update Customizer fields. */
  public $: ICustomizerUpdater =
  {
    Palette: () => this._payload.$.get.palette(value => this.Customizer.Palette = value),
    DarkMode: () => this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on"),
    Font: () => this._payload.$.get.font(value => this.Customizer.Font = value),
    TextSlider: () => this._payload.$.get.textSlider(value => this.setTextSlider(value)),
    Breakpoint: () => this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value),
    Route: () => this._payload.$.get.route(value => this.setTitle(value))
  }

  private setTextSlider(value: string)
  {
    this.Customizer.TextSlider = value;
    document.documentElement.style.setProperty("--font-scale", value);
  }
}

import { Component, OnDestroy } from '@angular/core';
import { ICustomizationParams } from 'src/app/models/customizer';
import { PayloadService } from 'src/app/services/payload.service';
import { Subject, takeUntil } from 'rxjs';
import { INavigationParams } from './models/navigation-params';

@Component({ template: `` })
export class BaseComponent implements OnDestroy
{
  /** Read-only navigation pagameters. */
  public readonly PARAMS: INavigationParams =
  {
    COLORS: ["default", "green", "yellow", "red", "purple"],
    FONTS: ["Montserrat", "Roboto"],
    LANGUAGES: ["it", "gb"],
    NAVBAR_ITEMS: [
      { link: "", icon: "house", text: "Home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ]
  };

  public destroy$ = new Subject<void>();

  /** An object that contains all customization params. */
  public Customizer: ICustomizationParams =
  {
    DarkMode: false,
    Palette: { color: "default", bgImage: "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)" },
    Font: "Montserrat",
    Blur: true,
    Breakpoint: true
  };

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

  /** Object used to get default Customizer values. */
  public $ =
  {
    /** Get dark mode value. */
    DarkMode: () => this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on"),
    /** Get the palette. */
    Palette: () => this._payload.$.get.palette(value => this.Customizer.Palette = value),
    /** Get the font. */
    Font: () => this._payload.$.get.font(value => this.Customizer.Font = value),
    /** Get blur value. */
    Blur: () => this._payload.$.get.blur(value => this.Customizer.Blur = value === "on"),
    /** Get breakpoint value. */
    Breakpoint: () => this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value),
    /** Get the current HTML document and set its title. */
    Route: () => this._payload.$.get.route(value => this.setTitle(value))
  }
}

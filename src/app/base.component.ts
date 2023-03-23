import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomizationParams } from 'src/app/models/customizer';
import { INavbarItem } from 'src/app/models/navbar-item';
import { PayloadService } from 'src/app/services/payload.service';

@Component({ template: `` })
export class BaseComponent implements OnDestroy
{
  /** Navigation constants. */
  public readonly CONSTS =
  {
    COLORS: ['default', 'green', 'yellow', 'red', 'purple'],
    FONTS: ['Montserrat', 'Roboto'],
    LANGUAGES: ['it', 'gb'],
    NAVBAR_ITEMS: [
      { link: "home", icon: "house", text: "Home" },
      { link: "about-me", icon: "person-circle", text: "aboutMe" },
      { link: "contact-me", icon: "send", text: "contactMe" },
      { link: "technologies", icon: "code-slash", text: "technologies" }
    ] as INavbarItem[]
  };

  /** An object that contains all customization params. */
  public Customizer: ICustomizationParams =
  {
    DarkMode: false,
    Palette: { color: "default", bgImage: "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)" },
    Font: "Montserrat",
    Blur: true,
    Breakpoint: true
  };

  /** Array of Subscriptions. */
  subscriptions: Subscription[] = [];

  constructor(
    /** Payload service used to get/set customization params or to use external services. */
    public _payload: PayloadService
  ) { }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
    this.subscriptions = [];
  }

  /** Method that sets the title of the current HTML document based on the translation of the parameter.
   * @param route
   */
  protected setTitle(route: string)
  {
    if (route === "home") route = "Home";
    let arr = route.split("-");
    if (arr.length > 1) arr[1] = "Me";

    this.subscriptions.push(
      this._payload._translate.stream(arr.join("")).subscribe(
        (value: string) => this._payload._title.setTitle(`${value} | WaltWebsite`)
      )
    );
  }

  /** Get the current HTML document and set its title. */
  protected getRoute()
  {
    this.subscriptions.push(
      this._payload.$.get.route(value => this.setTitle(value))
    );
  }

  /** Get dark mode value. */
  protected getDarkMode()
  {
    this.subscriptions.push(
      this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on")
    );
  }

  /** Get blur value. */
  protected getBlur()
  {
    this.subscriptions.push(
      this._payload.$.get.blur(value => this.Customizer.Blur = value === "on")
    );
  }

  /** Get the palette. */
  protected getPalette()
  {
    this.subscriptions.push(
      this._payload.$.get.palette(value => this.Customizer.Palette = value)
    );
  }

  /** Get the font. */
  protected getFont()
  {
    this.subscriptions.push(
      this._payload.$.get.font(value => this.Customizer.Font = value)
    );
  }

  /** Get breakpoint value. */
  protected getBreakpoint()
  {
    this.subscriptions.push(
      this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value)
    );
  }
}

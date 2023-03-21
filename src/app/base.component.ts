import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomizationParams } from 'src/app/models/customizer';
import { INavbarItem } from 'src/app/models/navbar-item';
import { PayloadService } from 'src/app/services/payload.service';

@Component({ template: `` })
export class BaseComponent implements OnInit, OnDestroy
{
  route = "Home";

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

  ngOnInit(): void
  {
    this.subscriptions.push(
      this._payload._translate.stream(this.route).subscribe(route => this._payload._title.setTitle(`${route} | WaltWebsite`)),
      this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on"),
      this._payload.$.get.blur(value => this.Customizer.Blur = value === "on"),
      this._payload.$.get.palette(value => this.Customizer.Palette = value),
      this._payload.$.get.font(value => this.Customizer.Font = value),
      this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value)
    );
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}

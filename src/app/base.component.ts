import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomizationParams } from 'src/models/customizer';
import { INavbarItem } from 'src/models/navbar-item';
import { PayloadService } from 'src/services/payload.service';

@Component({ template: `` })
export class BaseComponent implements OnInit, OnDestroy
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

  protected subscriptions: Subscription[] = [];

  constructor(
    /** Payload service used to get/set customization params or to use external services. */
    public _payload: PayloadService
  ) { }

  ngOnInit(): void
  {
    const darkMode_ = this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on");
    const blur_ = this._payload.$.get.blur(value => this.Customizer.Blur = value === "on");
    const palette_ = this._payload.$.get.palette(value => this.Customizer.Palette = value);
    const font_ = this._payload.$.get.font(value => this.Customizer.Font = value);
    const breakpoint_ = this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value);

    this.subscriptions.push(darkMode_, blur_, palette_, font_, breakpoint_);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}

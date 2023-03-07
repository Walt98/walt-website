import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomizationParams } from 'src/models/customizer';
import { INavbarItem } from 'src/models/navbar-item';
import { PayloadService } from 'src/services/payload.service';

@Component({ template: `` })
export class BaseComponent implements OnInit, OnDestroy
{
  // CONSTANTS
  public COLORS = ['default', 'green', 'yellow', 'red', 'purple'];
  public FONTS = ['Montserrat', 'Roboto'];
  public LANGUAGES = ['it', 'gb'];
  public NAVBAR_ITEMS = [
    { link: "home", icon: "house", text: "Home" },
    { link: "about-me", icon: "person-circle", text: "aboutMe" },
    { link: "contact-me", icon: "send", text: "contactMe" },
    { link: "technologies", icon: "code-slash", text: "technologies" }
  ] as INavbarItem[];

  /** An object that contains all customization params. */
  public Customizer: ICustomizationParams =
  {
    DarkMode: false,
    Palette: {},
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
    const _darkMode = this._payload.$.get.darkMode(value => this.Customizer.DarkMode = value === "on");
    const _blur = this._payload.$.get.blur(value => this.Customizer.Blur = value === "on");
    const _palette = this._payload.$.get.palette(value => this.Customizer.Palette = value);
    const _font = this._payload.$.get.font(value => this.Customizer.Font = value);
    const _breakpoint = this._payload.$.get.breakpoint(value => this.Customizer.Breakpoint = value);

    this.subscriptions.push(...[_darkMode, _blur, _palette, _font, _breakpoint]);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}

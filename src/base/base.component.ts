import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INavbarItem } from 'src/models/navbar-item';
import { IPalette } from 'src/models/palette';
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

  // CUSTOMIZERS
  public darkMode = false;
  public palette: IPalette = {};
  public font = "Montserrat";
  public blur = true;
  public breakpoint = true;

  protected subscriptions: Subscription[] = [];

  constructor(
    /** Payload service used to get/set Customizers or to use external services. */
    public _payload: PayloadService
  ) { }

  ngOnInit(): void
  {
    const _DarkMode = this._payload.$.Get.DarkMode(value => this.darkMode = value === "on");
    const _Blur = this._payload.$.Get.Blur(value => this.blur = value === "on");
    const _Palette = this._payload.$.Get.Palette(value => this.palette = value);
    const _Font = this._payload.$.Get.Font(value => this.font = value);
    const _Breakpoint = this._payload.$.Get.Breakpoint(value => this.breakpoint = value);

    this.subscriptions.push(...[_DarkMode, _Blur, _Palette, _Font, _Breakpoint]);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}

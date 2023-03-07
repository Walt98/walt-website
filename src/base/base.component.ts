import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INavbarItem } from 'src/models/navbar-item';
import { IPalette } from 'src/models/palette';
import { Payload } from 'src/services/payload.service';

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

  constructor(public payload: Payload) { }

  ngOnInit(): void
  {
    const _DarkMode = this.payload.$.Get.DarkMode(value => this.darkMode = value === "on");
    const _Blur = this.payload.$.Get.Blur(value => this.blur = value === "on");
    const _Palette = this.payload.$.Get.Palette(value => this.palette = value);
    const _Font = this.payload.$.Get.Font(value => this.font = value);
    const _Breakpoint = this.payload.$.Get.Breakpoint(value => this.breakpoint = value);

    this.subscriptions.push(...[_DarkMode, _Blur, _Palette, _Font, _Breakpoint]);
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}

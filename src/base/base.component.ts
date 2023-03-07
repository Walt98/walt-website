import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGet$ } from 'src/models/get-set';
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

  /** Functions used to set locale values based on subscriptions values. */
  protected STOCK: IGet$ =
  {
    DarkMode: () => this.payload.$.Get.DarkMode(value => this.darkMode = value === "on"),
    Palette: () => this.payload.$.Get.Palette(value => this.palette = value),
    Font: () => this.payload.$.Get.Font(value => this.font = value),
    Blur: () => this.payload.$.Get.Blur(value => this.blur = value === "on"),
    Breakpoint: () => this.payload.$.Get.Breakpoint(value => this.breakpoint = value)
  };
  
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
    
  }

  ngOnDestroy(): void
  {
    this.subscriptions.forEach($ => $.unsubscribe());
  }

  /** Set default values and add custom codes.
   * @param type 1 —> darkMode
   * @param type 2 —> blur
   * @param type 3 —> palette
   * @param type 4 —> font
   * @param type 5 —> breakpoint
   */
  protected next(value: any, type: number, func: () => void)
  {
    if (type === 1) this.darkMode = value == 'on';
    if (type === 2) this.blur = value == 'on';
    if (type === 3) this.palette = value;
    if (type === 4) this.font = value;
    if (type === 5) this.breakpoint = value;
    func();
  }
}

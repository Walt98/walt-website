import { Component, OnInit } from '@angular/core';
import { INavbarItem } from 'src/models/navbar-item';
import { IPalette } from 'src/models/palette';
import { ShOptions } from 'src/services/sh-options.service';

@Component({ template: `` })
export class BaseComponent implements OnInit
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

  constructor(public options: ShOptions) { }

  ngOnInit(): void
  {
    
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

  /** Default method to set local dark mode. */
  protected defaultDarkMode = () => this.options.$.get.darkMode(value => this.darkMode = value === "on");

  /** Default method to set local palette. */
  protected defaultPalette = () => this.options.$.get.palette(value => this.palette = value);
  
  /** Default method to set local font. */
  protected defaultFont = () => this.options.$.get.font(value => this.font = value);
  
  /** Default method to set local blur. */
  protected defaultBlur = () => this.options.$.get.blur(value => this.blur = value === "on");
  
  /** Default method to set local breakpoint. */
  protected defaultBreakpoint = () => this.options.$.get.breakpoint(value => this.breakpoint = value);
}

import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode = false;

  // BOOLEANS
  public clicked = false;
  public isLarge = false;

  // CONSTANTS
  public items = this.options.CONSTS.NAVBAR_ITEMS;

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.breakpoint(value => this.isLarge = value);
    this.options.$.get.palette(palette => this.palette = palette);
    this.options.$.get.darkMode(value => this.darkMode = value == "on");
  }

  public firstUpper = (str = "default"): string =>
    this.darkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

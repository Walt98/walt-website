import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  // CUSTOMIZERS
  public darkMode = false;
  public palette: IPalette = {};

  // CONSTANTS
  public items = this.options.CONSTS.NAVBAR_ITEMS;

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.darkMode(value =>
    {
      this.darkMode = value == 'on';
      this.onChangesActive();
    });

    this.options.$.get.palette(palette =>
    {
      this.palette = palette;
      this.onChangesActive();
    });
    
    // ROUTER CHANGES
    this.options._router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive(path = document.URL.replace(document.baseURI, ""))
  {
    let item = undefined;
    this.items.forEach(i => i.class = "");

    switch (path)
    {
      case "about-me": item = this.items[1]; break;
      case "contact-me": item = this.items[2]; break;
      case "technologies": item = this.items[3]; break;
      default: item = this.items[0]; break;
    }
    
    item.class = `active item-color-${this.darkMode ? 'dark' : this.palette.color}`;
  }
}

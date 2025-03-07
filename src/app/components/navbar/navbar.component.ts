import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../directives/base.directive';
import { INavbarItem } from 'src/app/models/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseDirective implements OnInit
{
  ngOnInit(): void
  {
    this.$.Palette(() => this.onChangesActive());
    this.$.DarkMode(() => this.onChangesActive());
  }

  public onChangesActive(path = document.URL.replace(document.baseURI, ""))
  {
    let item!: INavbarItem;
    this.PARAMS.NAVBAR_ITEMS.forEach(i => i.class = "");

    switch (path)
    {
      case "about-me": item = this.PARAMS.NAVBAR_ITEMS[1]; break;
      case "contact-me": item = this.PARAMS.NAVBAR_ITEMS[2]; break;
      case "technologies": item = this.PARAMS.NAVBAR_ITEMS[3]; break;
      default: item = this.PARAMS.NAVBAR_ITEMS[0]; break;
    }

    item.class = `active item-color-${this.Customizer.DarkMode ? "dark" : this.Customizer.Palette.color}`;
  }
}

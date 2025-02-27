import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../base.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseDirective implements OnInit
{
  private isOnInit = true;

  ngOnInit(): void
  {
    this.$.Route();

    this._payload.$.get.darkMode(value =>
    {
      this.Customizer.DarkMode = value === "on";
      this.onChangesActive();
    });

    this._payload.$.get.palette(value =>
    {
      this.Customizer.Palette = value;
      this.onChangesActive();
    });

    // ROUTER CHANGES
    this._payload._router.events.pipe(takeUntil(this.destroy$)).subscribe((e: any) =>
    {
      if (e.type === 1)
      {
        let path = e.url.slice(1);
        if (!["", "about-me", "contact-me", "technologies"].includes(path)) path = "";

        if (this.isOnInit)
        {
          this.setTitle(path);
          this.isOnInit = false;
        }
        this.onChangesActive(path);
      }
    });
  }

  public setRoute(route: string)
  {
    this.onChangesActive(route);
    this._payload.$.set.route(route);
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive(path = document.URL.replace(document.baseURI, ""))
  {
    let item = undefined;
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

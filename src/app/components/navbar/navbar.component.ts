import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
    
    const darkMode_ = this._payload.$.get.darkMode(value => this.onChangesActive());
    const palette_ = this._payload.$.get.palette(value => this.onChangesActive());
    
    // ROUTER CHANGES
    const events_ = this._payload._router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });

    this.subscriptions.push(darkMode_, palette_, events_);
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive(path = document.URL.replace(document.baseURI, ""))
  {
    let item = undefined;
    this.CONSTS.NAVBAR_ITEMS.forEach(i => i.class = "");

    switch (path)
    {
      case "about-me": item = this.CONSTS.NAVBAR_ITEMS[1]; break;
      case "contact-me": item = this.CONSTS.NAVBAR_ITEMS[2]; break;
      case "technologies": item = this.CONSTS.NAVBAR_ITEMS[3]; break;
      default: item = this.CONSTS.NAVBAR_ITEMS[0]; break;
    }
    
    item.class = `active item-color-${this.Customizer.DarkMode ? 'dark' : this.Customizer.Palette.color}`;
  }
}

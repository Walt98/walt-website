import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

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
    
    const _DarkMode = this._payload.$.Get.DarkMode(value => this.onChangesActive());
    const _Palette = this._payload.$.Get.Palette(value => this.onChangesActive());
    
    // ROUTER CHANGES
    const _events = this._payload._router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });

    this.subscriptions.push(...[_DarkMode, _Palette, _events]);
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive(path = document.URL.replace(document.baseURI, ""))
  {
    let item = undefined;
    this.NAVBAR_ITEMS.forEach(i => i.class = "");

    switch (path)
    {
      case "about-me": item = this.NAVBAR_ITEMS[1]; break;
      case "contact-me": item = this.NAVBAR_ITEMS[2]; break;
      case "technologies": item = this.NAVBAR_ITEMS[3]; break;
      default: item = this.NAVBAR_ITEMS[0]; break;
    }
    
    item.class = `active item-color-${this.darkMode ? 'dark' : this.palette.color}`;
  }
}

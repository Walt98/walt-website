import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

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

  public items = this.services.constants.navbarItems;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.darkMode$.subscribe(value =>
    {
      this.darkMode = value == 'on';
      if (this.palette) this.onChangesActive();
    });

    this.services.behavSubjects$.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.onChangesActive();
    });
    
    // ROUTER CHANGES
    this.services.router.events.subscribe((e: any) =>
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
    
    if (!!item) item.class = `active item-color-${this.darkMode ? 'dark' : this.palette.color}`;
  }
}

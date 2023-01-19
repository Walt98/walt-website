import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

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
  public isBlur = false;
  public offcanvasColor = "bgBlur";
  public menuButtonColor = "menu-button-default";

  // BOOLEANS
  public clicked = false;
  public isLarge = false;

  public items = this.services.constants.navbarItems;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.breakpoint$.subscribe(value => this.isLarge = value);

    this.services.behavSubjects$.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.setColors();
    });
    
    this.services.behavSubjects$.darkMode$.subscribe(value =>
    {
      this.darkMode = value == "on";
      this.setColors();
    });
    
    this.services.behavSubjects$.blur$.subscribe(value =>
    {
      this.isBlur = value == "on";
      this.setColors(false);
    });
    
    // ROUTER CHANGES
    this.services.router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });
  }

  private setColors(cond = true)
  {
    this.offcanvasColor = this.darkMode
      ? (this.isBlur ? 'bgDarkModeBlur' : 'bgDarkMode')
      : (this.isBlur ? 'bgBlur' : 'BGwhite');
    
    const color = (this.palette.color ?? "default")[0].toUpperCase() + this.palette.color?.slice(1);
    if (cond) this.menuButtonColor = `bg${ this.darkMode ? "DarkMode" : color }`;
  }

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
    
    if (!!item) item.class = "active";
  }

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("menu-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  public items = this.appService.navbarItems;

  constructor(private appService: AppService, private router: Router, private title: Title) { }

  ngOnInit(): void
  {
    this.appService.breakpoint$.subscribe(value => this.isLarge = value);

    this.appService.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.setColors();
    });
    
    this.appService.darkMode$.subscribe(value =>
    {
      this.darkMode = value == "on";
      this.setColors();
    });
    
    this.appService.blur$.subscribe(value =>
    {
      this.isBlur = value == "on";
      this.setColors(false);
    });
    
    // ROUTER CHANGES
    this.router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });
  }

  private setColors(cond = true)
  {
    this.offcanvasColor = this.darkMode
      ? (this.isBlur ? 'bgDarkModeBlur' : 'bgDarkMode')
      : (this.isBlur ? 'bgBlur' : 'BGwhite');
    
    if (cond) this.menuButtonColor = `menu-button-${ this.darkMode ? "dark" : this.palette.color }`;
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

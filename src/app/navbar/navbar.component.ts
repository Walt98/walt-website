import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarItem } from 'src/models/navbar-item';
import { IPalette } from 'src/models/palette';
import { AppService } from '../app.service';

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

  // CURRENT ROUTE
  public currentRoute = 'home';

  public items: INavbarItem[] = [
    { class: '', link: "home", icon: "house", text: "Home", show: false },
    { class: '', link: "about-me", icon: "person-circle", text: "aboutMe", show: false },
    { class: '', link: "contact-me", icon: "send", text: "contactMe", show: false },
    { class: '', link: "technologies", icon: "code-slash", text: "technologies", show: false },
  ];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe(value =>
    {
      this.darkMode = value == 'on';
      if (this.palette) this.onChangesActive();
    });

    this.appService.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.onChangesActive();
    });
    
    // SET CURRENT ROUTE
    this.router.events.subscribe((e: any) =>
    {
      if (e.type == 1)
      {
        if (e.url.includes('home') || e.url == '/')
        {
          this.currentRoute = 'home';
          this.items.forEach((item, i) => item.class = i == 0 ? this.active() : '');
        }
        else if (e.url.includes('about-me'))
        {
          this.currentRoute = 'about-me';
          this.items.forEach((item, i) => item.class = i == 1 ? this.active() : '');
        }
        else if (e.url.includes('contact-me'))
        {
          this.currentRoute = 'contact-me';
          this.items.forEach((item, i) => item.class = i == 2 ? this.active() : '');
        }
        else
        {
          this.currentRoute = 'technologies';
          this.items.forEach((item, i) => item.class = i == 3 ? this.active() : '');
        }
      }
    });
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive()
  {
    if (["home", "/"].includes(this.currentRoute))
    {
      this.items.forEach((item, i) => item.class = i == 0 ? this.active() : '');
    }
    else if (this.currentRoute == 'about-me')
    {
      this.items.forEach((item, i) => item.class = i == 1 ? this.active() : '');
    }
    else if (this.currentRoute == 'contact-me')
    {
      this.items.forEach((item, i) => item.class = i == 2 ? this.active() : '');
    }
    else
    {
      this.items.forEach((item, i) => item.class = i == 3 ? this.active() : '');
    }
  }

  private active = () => `active item-color-${this.darkMode ? 'dark' : this.palette?.color}`;
}

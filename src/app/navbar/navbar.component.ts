import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarItem } from 'src/models/navbar-item';
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
        let item: INavbarItem | undefined = undefined;

        if (e.url.includes('home') || e.urlAfterRedirects.includes('home'))
        {
          this.currentRoute = 'home';
          item = this.items[0];
        }
        else if (e.url.includes('about-me'))
        {
          this.currentRoute = 'about-me';
          item = this.items[1];
        }
        else if (e.url.includes('contact-me'))
        {
          this.currentRoute = 'contact-me';
          item = this.items[2];
        }
        else
        {
          this.currentRoute = 'technologies';
          item = this.items[3];
        }

        this.active(item);
      }
    });
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive()
  {
    let item: INavbarItem | undefined = undefined;

    if (["home", "/"].includes(this.currentRoute)) item = this.items[0];
    else if (this.currentRoute == 'about-me') item = this.items[1];
    else if (this.currentRoute == 'contact-me') item = this.items[2];
    else item = this.items[3];
    
    this.active(item);
  }

  private active(item: INavbarItem | undefined)
  {
    this.items.forEach(i => i.class = "");
    if (!!item) item.class = `active item-color-${this.darkMode ? 'dark' : this.palette.color}`;
  }
}

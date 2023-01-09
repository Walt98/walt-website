import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // NAVBAR ITEMS CLASSES
  public homeClass = '';
  public aboutMeClass = '';
  public contactMeClass = '';

  // CURRENT ROUTE
  public currentRoute = 'home';

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
          this.homeClass = this.active();
          this.aboutMeClass = '';
          this.contactMeClass = '';
        }
        else if (e.url.includes('about-me'))
        {
          this.currentRoute = 'about-me';
          this.homeClass = '';
          this.aboutMeClass = this.active();
          this.contactMeClass = '';
        }
        else
        {
          this.currentRoute = 'contact-me';
          this.homeClass = '';
          this.aboutMeClass = '';
          this.contactMeClass = this.active();
        }
      }
    });
  }

  // SET NAVBAR-ITEM ACTIVE CLASS
  private onChangesActive()
  {
    if (["home", "/"].includes(this.currentRoute))
    {
      this.homeClass = this.active();
      this.aboutMeClass = '';
      this.contactMeClass = '';
    }
    else if (this.currentRoute == 'about-me')
    {
      this.homeClass = '';
      this.aboutMeClass = this.active();
      this.contactMeClass = '';
    }
    else
    {
      this.homeClass = '';
      this.aboutMeClass = '';
      this.contactMeClass = this.active();
    }
  }

  private active = () => `active item-color-${this.darkMode ? 'dark' : this.palette.color}`;
}

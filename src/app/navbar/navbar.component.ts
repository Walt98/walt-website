import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  // CUSTOMIZERS
  public routerLink?: string;
  public darkMode?: boolean;
  public palette: any;

  // NAVBAR ITEMS CLASSES
  public homeClass: string = '';
  public aboutMeClass: string = '';
  public contactMeClass: string = '';

  // CURRENT ROUTE
  public currentRoute: string = 'home';

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) =>
    {
      this.darkMode = value == 'on';
      if (this.palette) this.onChangesActive();
    });

    this.appService.palette$.subscribe((value: any) =>
    {
      this.palette = value;
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
  public onChangesActive()
  {
    if (this.currentRoute == 'home' || this.currentRoute == '/')
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

  public active(): string
  {
    if (!this.darkMode) switch (this.palette.color)
    {
      case '#b44b4b': return 'active item-color-red';
      case '#67b34d': return 'active item-color-green';
      case '#b39c4a': return 'active item-color-yellow';
      case '#aa85bd': return 'active item-color-purple';
      default: return 'active item-color-default';
    }
    else return 'active item-color-dark';
  }
}

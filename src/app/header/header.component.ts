import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  // CUSTOMIZERS
  public darkMode = false;
  public isBlur = false;
  public offcanvasColor = "";

  // BOOLEANS
  public clicked = false;
  public isLarge = false;

  public items = this.appService.navbarItems;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void
  {
    this.setOffcanvasColor();

    this.appService.breakpoint$.subscribe(value => this.isLarge = value);
    this.appService.darkMode$.subscribe(value =>
    {
      this.darkMode = value == "on";
      this.setOffcanvasColor();
    });
    this.appService.blur$.subscribe(value =>
    {
      this.isBlur = value == "on";
      this.setOffcanvasColor();
    });
    
    // ROUTER CHANGES
    this.router.events.subscribe((e: any) =>
    {
      if (e.type == 1) this.onChangesActive(e.url.slice(1));
    });
  }

  private setOffcanvasColor()
  {
    this.offcanvasColor = this.darkMode
      ? (this.isBlur ? 'bgDarkModeBlur' : 'bgDarkMode')
      : (this.isBlur ? 'bgBlur' : 'BGwhite');
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

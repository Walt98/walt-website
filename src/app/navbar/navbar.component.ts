import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  @Input() palette: any;
  // @Input() darkMode?: boolean;
  @Input() activeAppLogo?: string;

  public routerLink?: string;
  public darkMode?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkModeBS$.subscribe((value: string) => this.darkMode = value == 'on');
  }

  active(router: string): string
  {
    let classDark: string = '';
    if (this.darkMode) classDark = 'item-color-dark';
    if (this.routerLink == router)
    {
      if (!this.darkMode) switch (this.palette.color)
      {
        case '#b44b4b': return 'active ' + 'item-color-red';
        case '#67b34d': return 'active ' + 'item-color-green';
        case '#b39c4a': return 'active ' + 'item-color-yellow';
        case '#aa85bd': return 'active ' + 'item-color-purple';
        default: return 'active ' + 'item-color-default';
      }
      else return classDark += ' active';
    }
    else return '';
  }

  log = (event: any) => console.log(event);
}

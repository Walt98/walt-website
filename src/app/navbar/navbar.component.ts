import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  @Input() palette: any;

  public routerLink: string = 'home';

  constructor() { }

  ngOnInit(): void
  {
    
  }

  active(router: string): string
  {
    if (this.routerLink == router) switch (this.palette.color)
    {
      case '#b44b4b': return 'active ' + 'item-color-red';
      case '#67b34d': return 'active ' + 'item-color-green';
      case '#b39c4a': return 'active ' + 'item-color-yellow';
      case '#aa85bd': return 'active ' + 'item-color-purple';
      default: return 'active ' + 'item-color-default';
    }
    else return '';
  }

  log = (event: any) => console.log(event);
}

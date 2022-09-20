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
    if (this.routerLink == router)
    {
      let itemClass = '';
      if (this.palette.color == '#b44b4b') itemClass = 'item-color-red';
      else if (this.palette.color == '#67b34d') itemClass = 'item-color-green';
      else if (this.palette.color == '#b39c4a') itemClass = 'item-color-yellow';
      else if (this.palette.color == '#aa85bd') itemClass = 'item-color-purple';
      else itemClass =  'item-color-default';

      return itemClass + ' active';
    }
    else return '';
  }

  log = (event: any) => console.log(event);
}

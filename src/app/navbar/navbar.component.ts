import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  public routerLink: string = 'home';

  constructor() { }

  ngOnInit(): void
  {
    
  }

  active = (router: string): string => this.routerLink == router ? 'active' : '';

  log = (event: any) => console.log(event);
}

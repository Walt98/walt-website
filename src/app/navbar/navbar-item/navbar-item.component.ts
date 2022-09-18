import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit, OnChanges
{
  @Input() routerLink?: string;
  @Input() icon?: string;
  @Input() title: string = '';

  @Output() rLink: EventEmitter<any> = new EventEmitter();

  public isOver: boolean = false;
  public showNavbarTitle: boolean = false;

  constructor() { }

  ngOnInit(): void
  {
    
  }

  ngOnChanges(): void
  {

  }

  mouseOver()
  {
    this.isOver = true;
    setTimeout(() => this.showNavbarTitle = true, 250);
  }

  log = (event: any) => console.log(event);
}

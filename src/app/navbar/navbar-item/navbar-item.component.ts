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
  @Input() palette: any;

  @Output() rLink: EventEmitter<any> = new EventEmitter();

  public showTitle: boolean = false;

  constructor() { }

  ngOnInit(): void
  {
    
  }

  ngOnChanges(): void
  {

  }

  color(color: string): string
  {
    if (color == '#b44b4b') return 'title-color-red';
    else if (color == '#67b34d') return 'title-color-green';
    else if (color == '#b39c4a') return 'title-color-yellow';
    else if (color == '#aa85bd') return 'title-color-purple';
    else return  'title-color-default';
  }

  log = (event: any) => console.log(event);
}

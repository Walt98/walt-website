import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit
{
  @Input() routeLink?: string;
  @Input() icon?: string;
  @Input() title: string = '';
  @Input() palette: any;
  @Input() darkMode?: boolean;

  @Output() rLink: EventEmitter<any> = new EventEmitter();

  public showTitle: boolean = false;

  constructor() { }

  ngOnInit(): void
  {
    
  }

  color(color: string): string
  {
    if (this.darkMode) return 'title-color-dark';
    else switch (color)
    {
      case '#b44b4b': return 'title-color-red';
      case '#67b34d': return 'title-color-green';
      case '#b39c4a': return 'title-color-yellow';
      case '#aa85bd': return 'title-color-purple';
      default: return 'title-color-default';
    }
  }

  log = (event: any) => console.log(event);
}

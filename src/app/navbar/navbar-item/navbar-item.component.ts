import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit
{
  // INPUTS
  @Input() routeLink?: string;
  @Input() icon?: string;
  @Input() title: string = '';

  // CUSTOMIZERS
  public darkMode?: boolean;
  public palette: any;
  public colorClass?: string;
  
  // BOOLEANS
  public showTitle: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
    this.appService.palette$.subscribe((value: any) => this.palette = value);
  }

  public color(color: string): string
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
}

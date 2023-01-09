import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit
{
  // INPUTS
  @Input() routeLink: string = "home";
  @Input() icon: string = "home";
  @Input() title: string = "Home";

  // CUSTOMIZERS
  public darkMode = false;
  public palette: IPalette = {};

  // BOOLEANS
  public showTitle = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.appService.palette$.subscribe(palette => this.palette = palette);
  }
}

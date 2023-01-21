import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode = false;

  // BOOLEANS
  public clicked = false;
  public isLarge = false;

  // CONSTANTS
  public items = this.services.constants.navbarItems;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.breakpoint$.subscribe(value => this.isLarge = value);
    this.services.behavSubjects$.palette$.subscribe(palette => this.palette = palette);
    this.services.behavSubjects$.darkMode$.subscribe(value => this.darkMode = value == "on");
  }

  public firstUpper = (str = "default"): string =>
    this.darkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

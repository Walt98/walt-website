import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit
{
  // CUSTOMIZERS
  public clicked = false;
  public palette: IPalette = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe(value => this.clicked = value == "on");
    this.appService.palette$.subscribe(palette => this.palette = palette);
  }

  public setDarkMode()
  {
    this.clicked = !this.clicked;
    let dark = this.clicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.appService.setDarkMode(dark);
  }
}

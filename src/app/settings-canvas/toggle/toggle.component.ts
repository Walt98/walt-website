import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit
{
  // INPUTS
  @Input() toggleClicked: boolean = false;

  // CUSTOMIZERS
  public isBlur = false;
  public darkMode = false;
  public palette: IPalette = {};

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe(value => this.isBlur = value == 'on');
    this.appService.darkMode$.subscribe(value => this.darkMode = value == "on");
    this.appService.palette$.subscribe(palette => this.palette = palette);
  }

  public setDarkMode()
  {
    this.toggleClicked = !this.toggleClicked;
    let dark = this.toggleClicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.appService.setDarkMode(dark);
  }
}

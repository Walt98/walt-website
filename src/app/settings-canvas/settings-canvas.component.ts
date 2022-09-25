import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  public palette: any;
  public colorClass?: string;

  public clicked: boolean = false;
  public toggleClicked: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) => this.toggleClicked = value == 'on');

    this.appService.palette$.subscribe((value: any) =>
    {
      localStorage.setItem('palette', JSON.stringify(value));
      this.palette = value;
      switch (value.color)
      {
        case '#b44b4b': this.colorClass = 'color-red'; break;
        case '#67b34d': this.colorClass = 'color-green'; break;
        case '#b39c4a': this.colorClass = 'color-yellow'; break;
        case '#aa85bd': this.colorClass = 'color-purple'; break;
        default: this.colorClass = 'color-default'; break;
      }
    });
  }

  activeIcon = (color: string): string => this.palette.color == color ? 'activeIcon' : '';

  setDarkMode()
  {
    this.toggleClicked = !this.toggleClicked;
    let dark = this.toggleClicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.appService.setDarkMode(dark);
  }

  log = (event: any) => console.log(event);
}

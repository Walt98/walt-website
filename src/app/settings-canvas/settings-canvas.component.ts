import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: any;
  public colorClass?: string;
  public font?: string;
  public blur?: boolean;
  public canvasColor?: string;
  
  // BOOLEANS
  public clicked: boolean = false;
  public toggleClicked: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) =>
    {
      this.toggleClicked = value == 'on';
      if (value == 'on') this.canvasColor = this.blur ? 'darkBlur' : 'canvasDarkMode';
      else this.canvasColor = this.blur ? 'blur' : '';
    });
    
    this.appService.blur$.subscribe((value: string) =>
    {
      this.blur = value == 'on';
      if (this.toggleClicked) this.canvasColor = this.blur ? 'darkBlur' : 'canvasDarkMode';
      else this.canvasColor = this.blur ? 'blur' : '';
    });

    this.appService.palette$.subscribe((value: any) =>
    {
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

    this.appService.font$.subscribe((value: string) => this.font = value);
  }

  public activeIcon = (color: string): string => this.palette.color == color ? 'activeIcon' : '';
  public activeFont = (font: string): string => this.font == font ? 'activeFont' : '';
}

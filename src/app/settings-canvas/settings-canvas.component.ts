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
  public toggleClicked?: boolean;

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
        case 'red': this.colorClass = 'color-red'; break;
        case 'green': this.colorClass = 'color-green'; break;
        case 'yellow': this.colorClass = 'color-yellow'; break;
        case 'purple': this.colorClass = 'color-purple'; break;
        default: this.colorClass = 'color-default'; break;
      }
    });

    this.appService.font$.subscribe((value: string) => this.font = value);
  }

  public activeIcon = (color: string): string => this.palette.color == color ? 'activeIcon' : '';
  public activeFont = (font: string): string => this.font == font ? 'activeFont' : '';
}

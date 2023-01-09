import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public font?: string;
  public blur?: boolean;
  public canvasColor?: string;
  
  // BOOLEANS
  public clicked = false;
  public toggleClicked = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe(value =>
    {
      this.toggleClicked = value == 'on';
      this.setCanvasColor();
    });
    
    this.appService.blur$.subscribe(value =>
    {
      this.blur = value == 'on';
      this.setCanvasColor();
    });

    this.appService.palette$.subscribe(value => this.palette = value);
    this.appService.font$.subscribe(value => this.font = value);
  }

  private setCanvasColor()
  {
    this.canvasColor = this.toggleClicked
      ? (this.blur ? 'darkBlur' : 'canvasDarkMode')
      : (this.blur ? 'blur' : '');
  }

  public activeIcon = (color: string): string => this.palette.color == color ? 'activeIcon' : '';
  public activeFont = (font: string): string => this.font == font ? 'activeFont' : '';
}

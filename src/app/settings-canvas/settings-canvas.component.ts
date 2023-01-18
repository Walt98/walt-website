import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

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
      ? (this.blur ? 'bgDarkModeBlur' : 'bgDarkMode')
      : (this.blur ? 'bgBlur' : 'BGwhite');
  }

  public activeFont = (font: string): string => this.font == font ? 'activeFont' : '';

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("settings-div-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

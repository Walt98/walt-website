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
  public darkMode = false;
  public font?: string;
  public blur?: boolean;
  public canvasColor?: string;
  
  // BOOLEANS
  public clicked = false;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.darkMode$.subscribe(value =>
    {
      this.darkMode = value == 'on';
      this.setCanvasColor();
    });
    
    this.services.behavSubjects$.blur$.subscribe(value =>
    {
      this.blur = value == 'on';
      this.setCanvasColor();
    });

    this.services.behavSubjects$.palette$.subscribe(value => this.palette = value);
    this.services.behavSubjects$.font$.subscribe(value => this.font = value);
  }

  private setCanvasColor()
  {
    this.canvasColor = this.darkMode
      ? (this.blur ? 'bgDarkModeBlur' : 'bgDarkMode')
      : (this.blur ? 'bgBlur' : 'BGwhite');
  }

  public activeFont = (font: string): string => this.font == font ? 'activeFont' : '';

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("settings-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

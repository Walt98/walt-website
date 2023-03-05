import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { ShOptions } from 'src/services/sh-options.service';

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

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.darkMode(value =>
    {
      this.darkMode = value == 'on';
      this.setCanvasColor();
    });
    
    this.options.$.get.blur(value =>
    {
      this.blur = value == 'on';
      this.setCanvasColor();
    });

    this.options.$.get.palette(value => this.palette = value);
    this.options.$.get.font(value => this.font = value);
  }

  private setCanvasColor = () => this.canvasColor = this.darkMode
    ? (this.blur ? "bgDarkModeBlur" : "bgDarkMode")
    : (this.blur ? "bgBlur" : "BGwhite");

  public activeFont = (font: string): string => this.font == font ? "activeFont" : "";

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("settings-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent extends BaseComponent implements OnInit
{
  // CUSTOMIZERS
  public canvasColor?: string;
  
  // BOOLEANS
  public clicked = false;

  ngOnInit(): void
  {
    this.$.Palette();
    this._payload.$.get.darkMode(value =>
    {
      this.Customizer.DarkMode = value === "on";
      this.setCanvasColor();
    });
    this._payload.$.get.blur(value =>
    {
      this.Customizer.Blur = value === "on";
      this.setCanvasColor();
    });
  }

  private setCanvasColor = () => this.canvasColor = this.Customizer.DarkMode
    ? (this.Customizer.Blur ? "bgDarkModeBlur" : "bgDarkMode")
    : (this.Customizer.Blur ? "bgBlur" : "BGwhite");

  public activeFont = (font: string): string => this.Customizer.Font == font ? "activeFont" : "";

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("settings-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

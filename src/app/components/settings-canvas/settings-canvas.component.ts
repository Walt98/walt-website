import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../directives/base.directive';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent extends BaseDirective implements OnInit
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
  }

  private setCanvasColor = () => this.canvasColor = this.Customizer.DarkMode ? "bgDarkModeBlur" : "bgBlur";

  public checkOutside(target: any)
  {
    if (!target.classList.value.includes("settings-button") && this.clicked)
    {
      this.clicked = false;
    }
  }
}

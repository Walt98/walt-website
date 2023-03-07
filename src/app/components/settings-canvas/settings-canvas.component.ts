import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent extends BaseComponent
{
  // CUSTOMIZERS
  public canvasColor?: string;
  
  // BOOLEANS
  public clicked = false;

  override ngOnInit(): void
  {
    super.ngOnInit();
    
    const darkMode_ = this._payload.$.get.darkMode(value => this.setCanvasColor());
    const blur_ = this._payload.$.get.blur(value => this.setCanvasColor());

    this.subscriptions.push(...[darkMode_, blur_]);
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
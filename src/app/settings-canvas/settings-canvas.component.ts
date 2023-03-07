import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

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
    
    this.STOCK.Font();
    this.STOCK.Palette();
    this.payload.$.Get.DarkMode(value => this.next(value, 1, () => this.setCanvasColor()));
    this.payload.$.Get.Blur(value => this.next(value, 2, () => this.setCanvasColor()));
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

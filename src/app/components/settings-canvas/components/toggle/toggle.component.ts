import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/base.directive';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.$.Palette();
    this.$.DarkMode();
  }

  public setDarkMode()
  {
    this.Customizer.DarkMode = !this.Customizer.DarkMode;
    this._payload.$.set.darkMode(this.Customizer.DarkMode ? "on" : "off");

    if (this.Customizer.DarkMode)
    {
      document.documentElement.style.setProperty(`--gradient`, "linear-gradient(147.38deg, #a4c8d8 0%, #4989b9 100%)");
    }
  }
}

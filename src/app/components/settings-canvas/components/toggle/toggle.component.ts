import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.$.Palette();
    this.$.DarkMode();
  }

  public setDarkMode()
  {
    this.Customizer.DarkMode = !this.Customizer.DarkMode;
    this._payload.$.set.darkMode(this.Customizer.DarkMode ? 'on' : 'off');
  }
}

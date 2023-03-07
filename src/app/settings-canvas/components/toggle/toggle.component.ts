import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
  }

  public setDarkMode()
  {
    this.darkMode = !this.darkMode;
    this._payload.$.Set.DarkMode(this.darkMode ? 'on' : 'off');
  }
}

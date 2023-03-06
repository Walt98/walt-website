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
    
    this.defaultDarkMode();
    this.defaultPalette();
  }

  public setDarkMode()
  {
    this.darkMode = !this.darkMode;
    const dark = this.darkMode ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.options.$.set.darkMode(dark);
  }
}

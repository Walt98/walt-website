import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent
{
  // BOOLEANS
  public clicked = false;

  override ngOnInit(): void
  {
    super.ngOnInit();
    
    this.defaultBreakpoint();
    this.defaultPalette();
    this.defaultDarkMode();
  }

  public firstUpper = (str = "default"): string =>
    this.darkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

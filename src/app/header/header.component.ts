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
    
    this.STOCK.Breakpoint();
    this.STOCK.DarkMode();
    this.STOCK.Palette();
  }

  public firstUpper = (str = "default"): string =>
    this.darkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

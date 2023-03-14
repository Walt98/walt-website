import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent
{
  // BOOLEANS
  public clicked = false;

  public firstUpper = (str = "default"): string =>
    this.Customizer.DarkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

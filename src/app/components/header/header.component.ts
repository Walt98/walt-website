import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit
{
  // BOOLEANS
  public clicked = false;

  ngOnInit()
  {
    this.$.Breakpoint();
    this.$.DarkMode();
    this.$.Palette();
  }

  public setRoute(route: string)
  {
    this.clicked = false;
    this._payload.$.set.route(route);
  }

  public firstUpper = (str = "default"): string =>
    this.Customizer.DarkMode ? "DarkMode" : str[0].toUpperCase() + str.slice(1);
}

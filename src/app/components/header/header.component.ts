import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../directives/base.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseDirective implements OnInit
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

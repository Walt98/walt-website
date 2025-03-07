import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../../directives/base.directive';

@Component({
  selector: 'app-navbar-condensed',
  templateUrl: './navbar-condensed.component.html',
  styleUrls: ['./navbar-condensed.component.scss']
})
export class NavbarCondensedComponent extends BaseDirective implements OnInit
{
  public clicked = false;

  ngOnInit()
  {
    this.$.DarkMode();
    this.$.Palette();
  }

  public firstUp = (str = "default") =>
    this.Customizer.DarkMode ? "DarkMode" : this.firstUpper(str);
}

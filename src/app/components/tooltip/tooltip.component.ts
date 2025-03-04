import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent extends BaseDirective implements OnInit
{
  public tooltip = "";
  public top = 0;
  public bottom = 0;
  public left = 0;
  public right = 0;

  ngOnInit()
  {
    this.$.Palette();
    this.$.DarkMode();
  }

  /**
   * Get position properties.
   */
  public getStylePosition()
  {
    const top = `top: ${this.top}px;`;
    const bottom = `bottom: ${this.bottom}px;`;
    const left = `left: ${this.left}px;`;
    const right = `right: ${this.right}px;`;

    let res =
    [
      (this.bottom > 0 ? bottom : top),
      (this.right > 0 ? right : left)
    ];

    return res.join(" ");
  }
}

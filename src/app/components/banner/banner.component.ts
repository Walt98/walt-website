import { Component, Input, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BaseDirective implements OnInit
{
  @Input() body = "";
  @Input() textPulse = true;
  @Input() isTitle = false;
  @Input() fitContent = false;

  ngOnInit()
  {
    this.$.DarkMode();
    this.$.Palette();
  }
}

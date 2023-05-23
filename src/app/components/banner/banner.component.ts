import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BaseComponent implements OnInit
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

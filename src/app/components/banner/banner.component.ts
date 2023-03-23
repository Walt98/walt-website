import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends BaseComponent
{
  @Input() body = "";
  @Input() textPulse = true;
  @Input() isTitle = false;

  ngOnInit()
  {
    this.getDarkMode();
    this.getPalette();
  }
}

import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
    
    this.defaultBlur();
    this.defaultDarkMode();
    this.defaultPalette();
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.blur = isBlur;
    const blur = isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.options.$.set.blur(blur);
  }
}

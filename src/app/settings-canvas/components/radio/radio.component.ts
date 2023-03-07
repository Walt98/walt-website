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
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.blur = isBlur;
    this.payload.$.Set.Blur(isBlur ? 'on' : 'off');
  }
}

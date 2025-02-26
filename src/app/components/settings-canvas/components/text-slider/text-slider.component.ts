import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss']
})
export class TextSliderComponent extends BaseComponent implements OnInit {

  ngOnInit()
  {
    this.$.TextSlider();
  }

  public setTextSize(event: any)
  {
    const value = event.target.value;
    this._payload.$.set.textSlider(value);
  }
}

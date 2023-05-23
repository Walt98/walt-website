import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.$.DarkMode();
    this.$.Palette();
    this.$.Blur();
  }
}

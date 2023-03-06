import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit
{
  // CUSTOMIZERS
  public isBlur = false;
  public darkMode = false;
  public palette: IPalette = {};

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.blur(value => this.isBlur = value == 'on');
    this.options.$.get.darkMode(value => this.darkMode = value == 'on');
    this.options.$.get.palette(palette => this.palette = palette);
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.isBlur = isBlur;
    const blur = isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.options.$.set.blur(blur);
  }
}

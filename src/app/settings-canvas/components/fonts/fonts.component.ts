import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit
{
  // CUSTOMIZERS
  public darkMode = false;
  public fontInit = "Montserrat";

  // CONSTANTS
  public fonts = this.options.CONSTS.FONTS;

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.darkMode(value => this.darkMode = value == 'on');
    this.options.$.get.font(value => this.fontInit = value);
  }

  public setFont(font: string)
  {
    this.fontInit = font;
    localStorage.setItem('font', font);
    this.options.$.set.font(font);
  }
}

import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit
{
  // CUSTOMIZERS
  public clicked = false;
  public palette: IPalette = {};

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.darkMode(value => this.clicked = value == "on");
    this.options.$.get.palette(palette => this.palette = palette);
  }

  public setDarkMode()
  {
    this.clicked = !this.clicked;
    let dark = this.clicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.options.$.set.darkMode(dark);
  }
}

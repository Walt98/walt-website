import { Component, OnInit } from '@angular/core';
import { IPalette } from 'src/models/palette';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode = false;
  public font = 'Montserrat';

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.options.$.get.palette(palette => this.palette = palette);
    this.options.$.get.darkMode(value => this.darkMode = value == "on");
    this.options.$.get.font(font => this.font = font);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
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

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe(value => this.isBlur = value == 'on');
    this.appService.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.appService.palette$.subscribe(palette => this.palette = palette);
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.isBlur = isBlur;
    let blur = isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.appService.setBlur(blur);
  }
}

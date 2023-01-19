import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
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

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.blur$.subscribe(value => this.isBlur = value == 'on');
    this.services.behavSubjects$.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.services.behavSubjects$.palette$.subscribe(palette => this.palette = palette);
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.isBlur = isBlur;
    let blur = isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.services.set.blur(blur);
  }
}

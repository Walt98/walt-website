import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit
{
  // CUSTOMIZERS
  public isBlur?: boolean;
  public darkMode?: boolean;
  public palette: any;

  public radioColor: string = "linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)";
  public borderColor?: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe((value: string) => this.isBlur = value == 'on');
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
    this.appService.palette$.subscribe((palette: any) =>
    {
      this.palette = palette;
      if (!this.darkMode) this.radioColor = palette.bgImage;
      switch (palette.color)
      {
        case 'red': this.borderColor = 'radio-red'; break;
        case 'green': this.borderColor = 'radio-green'; break;
        case 'yellow': this.borderColor = 'radio-yellow'; break;
        case 'purple': this.borderColor = 'radio-purple'; break;
        default: this.borderColor = 'radio-default'; break;
      }
    });
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

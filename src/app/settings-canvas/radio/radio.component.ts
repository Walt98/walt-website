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
  public darkMode?: boolean;
  public radioColor: string = "linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)";
  public borderColor?: string;
  public palette: any;
  // public gradient?: string;
  
  // BOOLEANS
  public isBlur?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe((value: string) => this.isBlur = value == 'on');
    
    this.appService.darkMode$.subscribe((value: string) =>
    {
      this.darkMode = value == 'on';
      // this.radioColor = this.darkMode
      //   ? "#d5dfec;"
      //   : this.palette.bgImage;
      // if (!this.darkMode) this.gradient;
    });

    this.appService.palette$.subscribe((palette: any) =>
    {
      this.palette = palette;
      if (!this.darkMode) this.radioColor = palette.bgImage;
      switch (palette.color)
      {
        case 'red':
          this.borderColor = 'radio-red';
          // this.radioButtonColor = 'radio-button-red';
          break;
        case 'green':
          this.borderColor = 'radio-green';
          // this.radioButtonColor = 'radio-button-green';
          break;
        case 'yellow':
          this.borderColor = 'radio-yellow';
          // this.radioButtonColor = 'radio-button-yellow';
          break;
        case 'purple':
          this.borderColor = 'radio-purple';
          // this.radioButtonColor = 'radio-button-purple';
          break;
        default:
          this.borderColor = 'radio-default';
          // this.radioButtonColor = 'radio-button-default';
          break;
      }
    });
  }

  // public setGradient(bg: string)
  // {
  //   switch (bg)
  //   {
  //     case '#b44b4b':
  //       this.gradient = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
  //       break;
  //     case '#67b34d':
  //       this.gradient = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
  //       break;
  //     case '#b39c4a':
  //       this.gradient = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
  //       break;
  //     case '#aa85bd':
  //       this.gradient = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
  //       break;
  //     default:
  //       this.gradient = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
  //       break;
  //   }
  // }

  // SET BLUR
  public blurCanvas(isBlur: boolean)
  {
    this.isBlur = isBlur;
    let blur = this.isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.appService.setBlur(blur);
  }
}

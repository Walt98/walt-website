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
  public radioColor?: string;
  public radioButtonColor?: string;
  
  // BOOLEANS
  public isBlur?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
    this.appService.blur$.subscribe((value: string) => this.isBlur = value == 'on');

    // SET RADIO BUTTONS COLOR
    this.appService.palette$.subscribe((palette: any) =>
    {
      switch (palette.color)
      {
        case '#b44b4b':
          this.radioColor = 'radio-red';
          this.radioButtonColor = 'radio-button-red';
          break;
        case '#67b34d':
          this.radioColor = 'radio-green';
          this.radioButtonColor = 'radio-button-green';
          break;
        case '#b39c4a':
          this.radioColor = 'radio-yellow';
          this.radioButtonColor = 'radio-button-yellow';
          break;
        case '#aa85bd':
          this.radioColor = 'radio-purple';
          this.radioButtonColor = 'radio-button-purple';
          break;
        default:
          this.radioColor = 'radio-default';
          this.radioButtonColor = 'radio-button-default';
          break;
      }
    });
  }

  // SET BLUR
  public blurCanvas(isBlur: boolean = false)
  {
    this.isBlur = isBlur;
    let blur = this.isBlur ? 'on' : 'off';
    localStorage.setItem('blur', blur);
    this.appService.setBlur(blur);
  }
}

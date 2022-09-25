import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  @Output() palette: EventEmitter<any> = new EventEmitter<any>();
  @Output() darkMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  public paletteColors: any;
  public colorClass?: string;

  public clicked: boolean = false;
  public toggleClicked: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkModeBS$.subscribe((value: string) =>
    {
      this.toggleClicked = value == 'on';
      // this.appService.darkMode = this.toggleClicked;
    });
    this.paletteColors = this.appService.setPalette();
    this.appService.setPalette$(this.paletteColors);
    
    this.switchColor(this.paletteColors.color);

    this.appService.palette$.subscribe((value: any) =>
    {
      this.switchColor(value.color);
      this.appService.paletteApp$.next(value);
    });
  }

  activeIcon = (color: string): string => this.appService.setPalette().color == color ? 'activeIcon' : '';

  switchColor(color: string)
  {
    switch (color)
    {
      case '#b44b4b': this.colorClass = 'color-red'; break;
      case '#67b34d': this.colorClass = 'color-green'; break;
      case '#b39c4a': this.colorClass = 'color-yellow'; break;
      case '#aa85bd': this.colorClass = 'color-purple'; break;
      default: this.colorClass = 'color-default'; break;
    }
  } 
  
  // setColor(color: string)
  // {
  //   let bgImage: string = '';
    
  //   switch (color)
  //   {
  //     case '#b44b4b':
  //       bgImage = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
  //       this.colorClass = 'color-red';
  //       break;
  //     case '#67b34d':
  //       bgImage = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
  //       this.colorClass = 'color-green';
  //       break;
  //     case '#b39c4a':
  //       bgImage = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
  //       this.colorClass = 'color-yellow';
  //       break;
  //     case '#aa85bd':
  //       bgImage = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
  //       this.colorClass = 'color-purple';
  //       break;
  //     default:
  //       bgImage = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
  //       this.colorClass = 'color-default';
  //       break;
  //   }

  //   // localStorage.setItem('palette', JSON.stringify({'color': color, 'bgImage': bgImage}));
  //   // this.palette.emit(JSON.parse(localStorage.getItem('palette') ?? ''));

  //   // this.appService.setPalette$({ 'color': color, 'bgImage': bgImage });
  // }

  setDarkMode()
  {
    this.toggleClicked = !this.toggleClicked;
    // this.appService.setDarkMode$(this.toggleClicked);
    // this.appService.darkModeBS$.subscribe((value: string) =>
    // {
      
    // });
    localStorage.setItem('darkMode', this.toggleClicked ? 'on' : 'off');
    this.appService.darkModeBS$.next(this.toggleClicked ? 'on' : 'off');
  }

  log = (event: any) => console.log(event);
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  @Output() palette: EventEmitter<any> = new EventEmitter<any>();

  public paletteColors: any;
  public colorClass: string = 'color-default';

  public clicked: boolean = false;

  constructor() { }

  ngOnInit(): void
  {
    if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify({'color': '#2c82a7', 'bgImage': 'linear-gradient(147.38deg, #4C96B6 0%, #19496C 100%)'}));
    this.paletteColors = JSON.parse(localStorage.getItem('palette') ?? '');
    this.palette.emit(this.paletteColors);
  }

  activeIcon = (color: string): string => JSON.parse(localStorage.getItem('palette') ?? '').color == color ? 'activeIcon' : '';
  
  setColor(color: string)
  {
    let bgImage: string = '';
    
    switch (color) {
      case '#b44b4b':
      bgImage = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
      this.colorClass = 'color-red';
      break;
      case '#67b34d':
        bgImage = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
      this.colorClass = 'color-green';
        break;
      case '#b39c4a':
        bgImage = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
      this.colorClass = 'color-yellow';
        break;
      case '#aa85bd':
        bgImage = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
      this.colorClass = 'color-purple';
        break;
      default:
        bgImage = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
      this.colorClass = 'color-default';
        break;
    }
    localStorage.setItem('palette', JSON.stringify({'color': color, 'bgImage': bgImage}));
    this.palette.emit(JSON.parse(localStorage.getItem('palette') ?? ''));
  }

  log = (event: any) => console.log(event);
}

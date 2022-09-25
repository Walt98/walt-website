import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  @Input() bg: string | undefined;
  @Output() color: EventEmitter<any> = new EventEmitter<any>();

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    
  }

  setPalette(value: string)
  {
    // this.color.emit(value)

    let bgImage: string = '';
    
    switch (this.bg)
    {
      case '#b44b4b':
        bgImage = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
        // this.colorClass = 'color-red';
        break;
      case '#67b34d':
        bgImage = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
        // this.colorClass = 'color-green';
        break;
      case '#b39c4a':
        bgImage = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
        // this.colorClass = 'color-yellow';
        break;
      case '#aa85bd':
        bgImage = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
        // this.colorClass = 'color-purple';
        break;
      default:
        bgImage = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
        // this.colorClass = 'color-default';
        break;
    }

    // localStorage.setItem('palette', JSON.stringify({'color': color, 'bgImage': bgImage}));
    // this.palette.emit(JSON.parse(localStorage.getItem('palette') ?? ''));

    this.appService.setPalette$({ 'color': this.bg, 'bgImage': bgImage });
  }

  log = (e: any) => console.log(e);
}

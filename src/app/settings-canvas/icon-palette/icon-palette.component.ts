import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  @Input() bg: string | undefined;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    
  }

  setPalette()
  {
    let bgImage: string = '';
    
    switch (this.bg)
    {
      case '#b44b4b':
        bgImage = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
        break;
      case '#67b34d':
        bgImage = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
        break;
      case '#b39c4a':
        bgImage = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
        break;
      case '#aa85bd':
        bgImage = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
        break;
      default:
        bgImage = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
        break;
    }

    this.appService.setPalette({ 'color': this.bg, 'bgImage': bgImage });
  }

  log = (e: any) => console.log(e);
}

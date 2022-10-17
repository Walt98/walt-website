import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  // INPUTS
  @Input() bg: string | undefined;

  // BOOLEANS
  public blur?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe((value: string) => this.blur = value == 'on');
  }

  // SET PALETTE
  public setPalette()
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

    let palette = { 'color': this.bg, 'bgImage': bgImage };
    localStorage.setItem('palette', JSON.stringify(palette));
    this.appService.setPalette(palette);
  }
}

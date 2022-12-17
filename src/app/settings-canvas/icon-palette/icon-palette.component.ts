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
  @Input() bg?: string;

  // BOOLEANS
  public blur?: boolean;

  public bgImage: string = "";

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.setGradient(this.bg ?? "");
    this.appService.blur$.subscribe((value: string) => this.blur = value == 'on');
  }

  // SET PALETTE
  public setPalette()
  {
    this.setGradient(this.bg ?? "");
    let palette = { 'color': this.bg, 'bgImage': this.bgImage };
    localStorage.setItem('palette', JSON.stringify(palette));
    this.appService.setPalette(palette);
  }

  public setGradient(bg: string)
  {
    switch (bg)
    {
      case 'red':
        this.bgImage = 'linear-gradient(147.38deg, rgb(182 76 76) 0%, rgb(108 25 25) 100%)';
        break;
      case 'green':
        this.bgImage = 'linear-gradient(147.38deg, rgb(106 182 76) 0%, rgb(25 108 89) 100%)';
        break;
      case 'yellow':
        this.bgImage = 'linear-gradient(147.38deg, rgb(182 161 76) 0%, rgb(108 42 25) 100%)';
        break;
      case 'purple':
        this.bgImage = 'linear-gradient(147.38deg, rgb(176 134 192) 0%, rgb(34 107 121) 100%)';
        break;
      default:
        this.bgImage = 'linear-gradient(147.38deg, rgb(76, 150, 182) 0%, rgb(25, 73, 108) 100%)';
        break;
    }
  }
}

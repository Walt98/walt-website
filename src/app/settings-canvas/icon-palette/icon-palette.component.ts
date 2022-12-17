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
        this.bgImage = 'linear-gradient(147.38deg, #b64c4c 0%, #6c1919 100%)';
        break;
      case 'green':
        this.bgImage = 'linear-gradient(147.38deg, #6ab64c 0%, #196c59 100%)';
        break;
      case 'yellow':
        this.bgImage = 'linear-gradient(147.38deg, #b6a14c 0%, #6c2a19 100%)';
        break;
      case 'purple':
        this.bgImage = 'linear-gradient(147.38deg, #b086c0 0%, #226b79 100%)';
        break;
      default:
        this.bgImage = 'linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)';
        break;
    }
  }
}

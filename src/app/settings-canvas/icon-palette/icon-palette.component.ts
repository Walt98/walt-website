import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPalette } from 'src/models/palette';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  // INPUTS
  @Input() bg: string = "default";

  // CUSTOMIZERS
  public blur?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe(value => this.blur = value == 'on');
  }

  // SET PALETTE
  public setPalette()
  {
    let palette: IPalette = { color: this.bg, bgImage: this.setGradient(this.bg) };
    localStorage.setItem('palette', JSON.stringify(palette));
    this.appService.setPalette(palette);
  }

  public setGradient(bg: string): string
  {
    switch (bg)
    {
      case 'red': return 'linear-gradient(147.38deg, #b64c4c 0%, #6c1919 100%)';
      case 'green': return 'linear-gradient(147.38deg, #6ab64c 0%, #196c59 100%)';
      case 'yellow': return 'linear-gradient(147.38deg, #b6a14c 0%, #6c2a19 100%)';
      case 'purple': return 'linear-gradient(147.38deg, #b086c0 0%, #226b79 100%)';
      default: return 'linear-gradient(147.38deg, #4c96b6 0%, #19496c 100%)';
    }
  }
}

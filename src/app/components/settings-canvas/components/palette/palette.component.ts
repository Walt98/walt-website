import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.$.Palette();
  }

  public setGradient(bg: string): string
  {
    const partial = "linear-gradient(147.38deg, ";
    switch (bg)
    {
      case 'red': return partial + '#b64c4c 0%, #6c1919 100%)';
      case 'green': return partial + '#6ab64c 0%, #196c59 100%)';
      case 'yellow': return partial + '#b6a14c 0%, #6c2a19 100%)';
      case 'purple': return partial + '#b086c0 0%, #226b79 100%)';
      default: return partial + '#4c96b6 0%, #19496c 100%)';
    }
  }
}

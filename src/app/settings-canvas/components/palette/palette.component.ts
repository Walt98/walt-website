import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
    
    this.STOCK.Blur();
    this.STOCK.Palette();
  }

  // SET PALETTE
  public setPalette(bg = "default")
  {
    this.palette = { color: bg, bgImage: this.setGradient(bg) };
    this.payload.$.Set.Palette(this.palette);
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

import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss']
})
export class TextSliderComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.$.TextSize();
    this.$.DarkMode(() => this.setRoot());
    this.$.Palette(() => this.setRoot());
  }

  public setTextSizeValue(event: any)
  {
    const value = event.target.value;
    this._payload.$.set.textSize(value);
  }

  public getFirstToUpperCase(color: string)
  {
    const first = color[0].toUpperCase();
    return first + color.substring(1);
  }

  public getMargin(index: number)
  {
    let res = "";

    if (index !== 3)
    {
      res = `margin-${index < 3 ? "left" : "right"}: ${[1, 5].includes(index) ? 7 : -2}px;`;
    }

    return res;
  }

  private setRoot()
  {
    let res = "linear-gradient(147.38deg, ";

    if (!!this.Customizer.DarkMode) res += "#a4c8d8 0%, #4989b9 100%)";

    else switch (this.Customizer.Palette.color)
    {
      case "green": res += "#6ab64c 0%, #196c59 100%)"; break;
      case "yellow": res += "#b6a14c 0%, #6c2a19 100%)"; break;
      case "red": res += "#b64c4c 0%, #6c1919 100%)"; break;
      case "purple": res += "#b086c0 0%, #226b79 100%)"; break;
      default: res += "#4c96b6 0%, #19496c 100%)"; break;
    }

    document.documentElement.style.setProperty("--gradient", res);
  }
}

import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
    
    this.defaultDarkMode();
    this.defaultFont();
  }

  public setFont(font: string)
  {
    this.font = font;
    localStorage.setItem('font', font);
    this.options.$.set.font(font);
  }
}

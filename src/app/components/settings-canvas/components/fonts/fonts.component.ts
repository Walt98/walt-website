import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends BaseComponent
{
  ngOnInit()
  {
    this.getDarkMode();
    this.getFont();
  }
}

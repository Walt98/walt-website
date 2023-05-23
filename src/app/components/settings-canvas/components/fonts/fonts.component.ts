import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.$.DarkMode();
    this.$.Font();
  }
}

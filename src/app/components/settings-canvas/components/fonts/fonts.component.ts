import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/base.directive';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.$.DarkMode();
    this.$.Font();
  }
}

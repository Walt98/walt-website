import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/base.directive';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent extends BaseDirective implements OnInit
{
  ngOnInit(): void
  {
    this.$.DarkMode();
  }
}

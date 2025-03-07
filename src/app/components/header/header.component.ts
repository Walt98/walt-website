import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../../directives/base.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.$.Breakpoint();
  }
}

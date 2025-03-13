import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.setTitle("Home");
  }
}

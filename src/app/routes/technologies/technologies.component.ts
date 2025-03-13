import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.setTitle("Tecnologie", "Technologies");
  }
}

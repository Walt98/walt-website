import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent extends BaseComponent
{
  override route = "technologies";
}

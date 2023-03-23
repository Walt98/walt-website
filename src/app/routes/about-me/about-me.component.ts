import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.setTitle("aboutMe");
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent extends BaseComponent implements OnInit
{
  ngOnInit()
  {
    this.setTitle("contactMe");
  }
}

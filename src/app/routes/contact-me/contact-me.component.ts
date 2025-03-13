import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent extends BaseDirective implements OnInit
{
  ngOnInit()
  {
    this.setTitle("Contattami", "Contact me");
  }
}

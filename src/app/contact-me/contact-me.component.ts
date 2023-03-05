import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit
{

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {

  }
}

import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit
{

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {

  }
}

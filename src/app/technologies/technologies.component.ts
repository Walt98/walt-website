import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit
{
  
  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {

  }
}

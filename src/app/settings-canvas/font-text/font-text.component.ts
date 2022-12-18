import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-font-text',
  templateUrl: './font-text.component.html',
  styleUrls: ['./font-text.component.scss']
})
export class FontTextComponent implements OnInit
{
  // INPUTS
  @Input() font: string = "Montserrat";

  // CUSTOMIZERS
  public darkMode?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
  }

  public setFont(font: string)
  {
    localStorage.setItem('font', font);
    this.appService.setFont(font);
  }
}

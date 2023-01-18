import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit
{
  // CUSTOMIZERS
  public darkMode = false;
  public fontInit = "Montserrat";

  public fonts = this.appService.fonts;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.appService.font$.subscribe(value => this.fontInit = value);
  }

  public setFont(font: string)
  {
    this.fontInit = font;
    localStorage.setItem('font', font);
    this.appService.setFont(font);
  }
}

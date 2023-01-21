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

  // CONSTANTS
  public fonts = this.services.constants.fonts;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.services.behavSubjects$.font$.subscribe(value => this.fontInit = value);
  }

  public setFont(font: string)
  {
    this.fontInit = font;
    localStorage.setItem('font', font);
    this.services.set.font(font);
  }
}

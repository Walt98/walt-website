import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  public palette: any;
  public gradient?: string;
  public darkMode?: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.gradient = palette.bgImage;
    });
    this.appService.darkMode$.subscribe(value =>
    {
      this.darkMode = value == "on";
      this.gradient = this.darkMode
      ? 'linear-gradient(147.38deg, rgb(157 176 185) 0%, rgb(54 93 120) 100%)'
      : this.palette.bgImage;
    });
  }

}

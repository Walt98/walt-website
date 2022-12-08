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
  public darkMode: boolean = false;
  public font: string = 'Montserrat';

  public titleStyle?: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.palette$.subscribe(palette =>
    {
      this.palette = palette;
      this.gradient = palette.bgImage;
      this.setTitleStyle();
    });

    this.appService.darkMode$.subscribe(value =>
    {
      this.darkMode = value == "on";
      this.setTitleStyle();
    });

    this.appService.font$.subscribe(font =>
    {
      this.font = font;
      this.setTitleStyle();
    });
  }

  public setTitleStyle()
  {
    let arr: string[] = [];
    arr.push(
      `background-image: ${this.darkMode
        ? 'linear-gradient(147.38deg, rgb(157 176 185) 0%, rgb(54 93 120) 100%)'
        : this.palette.bgImage}`,
      `font-weight: ${this.font == "Roboto" ? 800 : 700}`,
    );

    this.titleStyle = arr.join("; ");
  }
}

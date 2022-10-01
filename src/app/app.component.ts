import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public palette: any;
  public darkMode?: boolean;
  public bgDark: string = 'linear-gradient(147.38deg, rgb(20 54 80) 0%, #000000 100%)';
  public font?: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
    this.appService.palette$.subscribe((value: any) =>
    {
      this.palette = value;
      if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify(value));
    });
    this.appService.font$.subscribe((value: string) => this.font = value);
  }

  log = (e: any) => console.log(e);
}

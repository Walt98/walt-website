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

  constructor(private appService: AppService) {  }

  ngOnInit(): void
  {
    this.palette = this.appService.setPalette();
    // this.darkMode = this.appService.setDarkMode();
    this.appService.darkModeBS$.subscribe((value: string) => this.darkMode = value == 'on');

    // this.appService.darkMode$.subscribe((darkMode: boolean) =>
    // {
    //   this.darkMode = darkMode;
    //   this.appService.darkModeNav$.next(darkMode);
    // });

    this.appService.paletteApp$.subscribe((value: any) => this.palette = value);
  }

  log = (e: any) => console.log(e);
}

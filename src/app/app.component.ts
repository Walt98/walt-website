import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: any;
  public darkMode?: boolean;
  public bgDark: string = 'linear-gradient(147.38deg, rgb(20 54 80) 0%, #000000 100%)';
  public font?: string;

  constructor(private appService: AppService, private translate: TranslateService)
  {
    // SET DEFAULT LANGUAGE
    translate.setDefaultLang('it');
    translate.use(localStorage.getItem('lang') ?? 'it');
  }

  ngOnInit(): void
  {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'it');
    this.appService.darkMode$.subscribe((value: string) => this.darkMode = value == 'on');
    this.appService.palette$.subscribe((value: any) =>
    {
      this.palette = value;
      if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify(value));
    });
    this.appService.font$.subscribe((value: string) => this.font = value);
  }
}

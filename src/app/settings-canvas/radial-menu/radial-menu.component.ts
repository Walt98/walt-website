import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-radial-menu',
  templateUrl: './radial-menu.component.html',
  styleUrls: ['./radial-menu.component.scss']
})
export class RadialMenuComponent implements OnInit
{
  public darkMode?: boolean;
  public palette: any;

  public radialColor?: string;
  public countryCode: string = 'it';

  public radialClicked?: boolean;

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void
  {
    // this.appService.lang$.subscribe((lang: string) => this.countryCode = lang == 'it' ? 'it' : 'gb');
    this.countryCode = this.translate.currentLang == 'it' ? 'it' : 'gb';
    this.appService.darkMode$.subscribe((darkMode: string) => this.darkMode = darkMode == 'on');
    this.appService.palette$.subscribe((palette: any) =>
    {
      this.palette = palette;
      switch (palette.color)
      {
        case '#b44b4b':
          this.radialColor = 'radial-red';
          break;
        case '#67b34d':
          this.radialColor = 'radial-green';
          break;
        case '#b39c4a':
          this.radialColor = 'radial-yellow';
          break;
        case '#aa85bd':
          this.radialColor = 'radial-purple';
          break;
        default:
          this.radialColor = 'radial-default';
          break;
      }
    });
  }

  setLanguage(country: string)
  {
    this.countryCode = country;
    this.translate.use(country == 'it' ? 'it' : 'en');
    localStorage.setItem('lang', country == 'it' ? 'it' : 'en');
  }
}

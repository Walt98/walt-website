import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent implements OnInit
{
  public darkMode?: boolean;
  public palette: any;

  public countryCode: string = 'it';
  public language: string = 'ITA';

  public countries = ['it', 'gb'];

  public langClicked?: boolean;
  public showSelect?: boolean;

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void
  {
    this.countryCode = this.translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.appService.darkMode$.subscribe((darkMode: string) => this.darkMode = darkMode == 'on');
  }

  setLanguage(country: string)
  {
    this.countryCode = country;
    this.language = country == 'it' ? 'ITA' : 'ENG';
    this.translate.use(country == 'it' ? 'it' : 'en');
    localStorage.setItem('lang', country == 'it' ? 'it' : 'en');
  }

  showLang()
  {
    this.langClicked = !this.langClicked;
    this.showSelect = false;
  }
}

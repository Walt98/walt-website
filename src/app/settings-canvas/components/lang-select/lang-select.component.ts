import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent implements OnInit
{
  // CUSTOMIZERS
  public darkMode = false;
  public isBlur = false;

  // BOOLEANS
  public clicked = false;
  public showSelect = false;

  // LANGUAGE VARIABLES
  public lang = 'it';
  public language = 'ITA';
  public langs = this.appService.langs;

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void
  {
    this.lang = this.translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.appService.darkMode$.subscribe(darkMode => this.darkMode = darkMode == 'on');
    this.appService.blur$.subscribe(value => this.isBlur = value == 'on');
  }

  public setLanguage(lang: string)
  {
    if (this.showSelect)
    {
      this.lang = lang;
      this.language = lang == 'it' ? 'ITA' : 'ENG';
      this.translate.use(lang == 'it' ? 'it' : 'en');
      localStorage.setItem('lang', lang == 'it' ? 'it' : 'en');
    }
  }

  public showLang()
  {
    this.clicked = !this.clicked;
    this.showSelect = false;
  }
}

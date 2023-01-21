import { Component, OnInit } from '@angular/core';
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

  // CONSTANTS
  public langs = this.services.constants.langs;

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.lang = this.services.translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.services.translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.services.behavSubjects$.darkMode$.subscribe(darkMode => this.darkMode = darkMode == 'on');
    this.services.behavSubjects$.blur$.subscribe(value => this.isBlur = value == 'on');
  }

  public setLanguage(lang: string)
  {
    if (this.showSelect)
    {
      this.lang = lang;
      this.language = lang == 'it' ? 'ITA' : 'ENG';
      this.services.translate.use(lang == 'it' ? 'it' : 'en');
      localStorage.setItem('lang', lang == 'it' ? 'it' : 'en');
    }
  }

  public showLang()
  {
    this.clicked = !this.clicked;
    this.showSelect = false;
  }

  checkOutside(target: any)
  {
    let id = target.id.includes("lang-select") ? +target.id.split("-")[2] : 1;
    const cond = this.clicked
              && ((this.showSelect && (!target.id.includes("lang-select") || id == 9 || id == 1))
                || (!this.showSelect && ((id > 0 && id < 6) || id == 9)));
    
    if (cond)
    {
      this.clicked = false;
      this.showSelect = false;
    }
  }
}

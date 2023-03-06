import { Component, OnInit } from '@angular/core';
import { ShOptions } from 'src/services/sh-options.service';

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
  public langs = this.options.CONSTS.LANGUAGES;

  constructor(private options: ShOptions) { }

  ngOnInit(): void
  {
    this.lang = this.options._translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.options._translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.options.$.get.darkMode(darkMode => this.darkMode = darkMode == 'on');
    this.options.$.get.blur(value => this.isBlur = value == 'on');
  }

  public setLanguage(lang: string)
  {
    if (this.showSelect)
    {
      this.lang = lang;
      this.language = lang == 'it' ? 'ITA' : 'ENG';
      this.options._translate.use(lang == 'it' ? 'it' : 'en');
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
    const id = target.id.includes("lang-select") ? +target.id.split("-")[2] : 1;
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

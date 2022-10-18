import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent implements OnInit, OnChanges
{
  // INPUTS
  @Input() settingsClicked?: boolean;

  // CUSTOMIZERS
  public darkMode?: boolean;
  public isBlur?: boolean;
  public country: string = 'it';
  public language: string = 'ITA';

  // BOOLEANS
  public langClicked?: boolean;
  public showSelect?: boolean;

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void
  {
    this.country = this.translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.appService.darkMode$.subscribe((darkMode: string) => this.darkMode = darkMode == 'on');
    this.appService.blur$.subscribe((value: string) => this.isBlur = value == 'on');
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (!this.settingsClicked)
    {
      this.langClicked = false;
      this.showSelect = false;
    }
  }

  public setLanguage(country: string)
  {
    this.country = country;
    this.language = country == 'it' ? 'ITA' : 'ENG';
    this.translate.use(country == 'it' ? 'it' : 'en');
    localStorage.setItem('lang', country == 'it' ? 'it' : 'en');
  }

  public showLang()
  {
    this.langClicked = !this.langClicked;
    this.showSelect = false;
  }
}

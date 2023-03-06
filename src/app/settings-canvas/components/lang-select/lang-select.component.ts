import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent extends BaseComponent
{
  // BOOLEANS
  public clicked = false;
  public showSelect = false;

  // LANGUAGE VARIABLES
  public lang = 'it';
  public language = 'ITA';

  override ngOnInit(): void
  {
    super.ngOnInit();
    
    this.lang = this.options._translate.currentLang == 'it' ? 'it' : 'gb';
    this.language = this.options._translate.currentLang == 'it' ? 'ITA' : 'ENG';
    this.defaultDarkMode();
    this.defaultBlur();
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
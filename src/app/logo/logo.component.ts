import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit
{
  constructor(
    // private translate: TranslateService
    )
  {
    // translate.setDefaultLang('it');
    // translate.use('en');
    // translate.use('it');
  }

  ngOnInit(): void { }
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { delay, Subject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode = false;
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';
  public font = "Montserrat";
  
  // ngAfterViewInit ASSETS
  @ViewChild("app") public app?: ElementRef;
  public isReady = false;
  public isReady$ = new Subject<boolean>();

  constructor(private appService: AppService, protected translate: TranslateService)
  {
    // SET DEFAULT LANGUAGE
    translate.setDefaultLang('it');
    translate.use(localStorage.getItem('lang') ?? 'it');
  }

  ngOnInit(): void
  {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'it');
    this.appService.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.appService.font$.subscribe(value => this.font = value);
    this.appService.palette$.subscribe(palette =>
    {
      this.palette = palette;
      if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify(palette));
    });

    // SHOW/HIDE SPINNER
    this.isReady$.pipe(delay(200)).subscribe(isReady => this.isReady = isReady);
  }

  ngAfterViewInit(): void
  {
    this.isReady$.next(!!this.app?.nativeElement);
  }
}

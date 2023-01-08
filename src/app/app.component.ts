import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { delay, Subject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  // CUSTOMIZERS
  public palette: any;
  public darkMode?: boolean;
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';
  public font?: string;
  
  // ngAfterViewInit ASSETS
  @ViewChild("app") public app?: ElementRef;
  public isReady = false;
  public isReady$ = new Subject<boolean>();

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

    // SHOW/HIDE SPINNER
    this.isReady$.pipe(delay(200)).subscribe(isReady => this.isReady = isReady);
  }

  ngAfterViewInit(): void
  {
    this.isReady$.next(!!this.app?.nativeElement);
  }
}

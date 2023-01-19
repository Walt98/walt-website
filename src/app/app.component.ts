import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  // BOOLEANS
  public isLarge = false;
  
  // ngAfterViewInit ASSETS
  @ViewChild("app") public app?: ElementRef;
  public isReady = false;
  public isReady$ = new Subject<boolean>();

  constructor(private services: AppService)
  {
    // SET DEFAULT LANGUAGE
    services.translate.setDefaultLang('it');
    services.translate.use(localStorage.getItem('lang') ?? 'it');
  }

  ngOnInit(): void
  {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'it');
    this.services.behavSubjects$.darkMode$.subscribe(value => this.darkMode = value == 'on');
    this.services.behavSubjects$.font$.subscribe(value => this.font = value);
    this.services.behavSubjects$.palette$.subscribe(palette =>
    {
      this.palette = palette;
      if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify(palette));
    });

    // SHOW/HIDE SPINNER
    this.isReady$.pipe(delay(200)).subscribe(isReady => this.isReady = isReady);

    // BREAKPOINT
    this.services.behavSubjects$.breakpoint$.subscribe(value => this.isLarge = value);
  }

  ngAfterViewInit(): void
  {
    this.isReady$.next(!!this.app?.nativeElement);
  }
}

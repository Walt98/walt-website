import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode = false;
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';
  public font = "Montserrat";

  // BOOLEANS
  public isLarge = false;
  
  @ViewChild("app") private app?: ElementRef;
  private translate$ = new Observable<any>();
  public isReady$ = new Subject<any>();
  public isReady = false;

  constructor(private services: AppService)
  {
    // SET DEFAULT LANGUAGE
    services.translate.setDefaultLang('it');
    this.translate$ = services.translate.use(localStorage.getItem('lang') ?? 'it');
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

    this.isReady$.subscribe(() => this.translate$.subscribe(() =>
    {
      if (!!this.app?.nativeElement) this.isReady = true;
    }));

    // BREAKPOINT
    this.services.behavSubjects$.breakpoint$.subscribe(value => this.isLarge = value);
  }
}

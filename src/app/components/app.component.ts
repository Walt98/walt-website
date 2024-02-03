import { Component, OnInit } from '@angular/core';
import { Subject, first } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit
{
  // CUSTOMIZERS
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';

  public isReady$ = new Subject<any>();
  public isReady = false;

  ngOnInit(): void
  {
    this.$.DarkMode();
    this.$.Palette();
    this.$.Font();
    this.$.Breakpoint();
    
    this.isReady$.pipe(first()).subscribe(() => this.isReady = true);
  }
}

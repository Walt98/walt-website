import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseDirective implements OnInit
{
  // CUSTOMIZERS
  public biDark = "linear-gradient(147.38deg, #143650 0%, #000000 100%)";

  public isReady$ = new Subject<void>();
  public isReady = false;

  ngOnInit(): void
  {
    this.$.DarkMode();
    this.$.Palette();
    this.$.Breakpoint();

    this.isReady$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isReady = true);
  }
}

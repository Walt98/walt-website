import { Component, OnInit } from '@angular/core';
import { first, Subject } from 'rxjs';
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
  public breakpoint = false;

  ngOnInit(): void
  {
    this.$.DarkMode();
    this.$.Palette();
    this.$.Breakpoint();

    // Remove the loading spinner
    this.isReady$.pipe(first()).subscribe(() => this.isReady = true);
  }
}

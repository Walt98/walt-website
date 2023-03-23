import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent
{
  // CUSTOMIZERS
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';

  public isReady$ = new Subject<any>();
  public isReady = false;

  ngOnInit(): void
  {
    this.getDarkMode();
    this.getPalette();
    this.getFont();
    this.getBreakpoint();
    
    const isReady$_ = this.isReady$.subscribe(() => this.isReady = true);

    this.subscriptions.push(isReady$_);
  }
}

import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from 'src/base/base.component';


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

  override ngOnInit(): void
  {
    super.ngOnInit();
    
    const _isReady$ = this.isReady$.subscribe(() => this.isReady = true);

    this.subscriptions.push(_isReady$);
  }
}

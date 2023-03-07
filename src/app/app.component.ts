import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from 'src/base/base.component';
import { IPalette } from 'src/models/palette';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent
{
  // CUSTOMIZERS
  public biDark = 'linear-gradient(147.38deg, #143650 0%, #000000 100%)';

  @ViewChild("app") private app?: ElementRef;
  public isReady$ = new Subject<any>();
  public isReady = false;

  override ngOnInit(): void
  {
    super.ngOnInit();
    
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'it');
    
    this.STOCK.Breakpoint();
    this.STOCK.DarkMode();
    this.STOCK.Font();
    this.payload.$.Get.Palette(value => this.next(value, 3, () => this.setItem(value)));

    const _isReady$ = this.isReady$.subscribe(() =>
    {
      if (!!this.app?.nativeElement) this.isReady = true;
    });

    this.subscriptions.push(_isReady$);
  }

  private setItem(palette: IPalette)
  {
    if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify(palette));
  }
}

import { Component } from '@angular/core';
import { BaseComponent } from 'src/base/base.component';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends BaseComponent
{
  override ngOnInit(): void
  {
    super.ngOnInit();
  }
}

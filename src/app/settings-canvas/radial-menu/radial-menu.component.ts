import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-radial-menu',
  templateUrl: './radial-menu.component.html',
  styleUrls: ['./radial-menu.component.scss']
})
export class RadialMenuComponent implements OnInit
{
  public darkMode?: boolean;
  public palette: any;

  public radialColor?: string;
  public countryCode: string = 'it';

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.darkMode$.subscribe((darkMode: string) => this.darkMode = darkMode == 'on');
    this.appService.palette$.subscribe((palette: any) =>
    {
      this.palette = palette;
      switch (palette.color)
      {
        case '#b44b4b':
          this.radialColor = 'radial-red';
          break;
        case '#67b34d':
          this.radialColor = 'radial-green';
          break;
        case '#b39c4a':
          this.radialColor = 'radial-yellow';
          break;
        case '#aa85bd':
          this.radialColor = 'radial-purple';
          break;
        default:
          this.radialColor = 'radial-default';
          break;
      }
    });
  }
}

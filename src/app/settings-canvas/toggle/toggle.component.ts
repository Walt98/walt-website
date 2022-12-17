import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit
{
  // BOOLEANS
  @Input() toggleClicked?: boolean;
  public isBlur?: boolean;
  
  public palette: any;
  public darkMode?: boolean;

  public gradient?: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.blur$.subscribe((value: string) => this.isBlur = value == 'on');
    this.appService.palette$.subscribe((palette: any) =>
    {
      this.palette = palette;
      if (!this.darkMode) this.gradient = palette.bgImage;
    });
    this.appService.darkMode$.subscribe((value: string) =>
    {
      this.darkMode = value == "on";
      this.gradient = this.darkMode
        ? "linear-gradient(327.38deg, #6d93a3 0%, #1e3e55 100%);"
        : this.palette.bgImage;
    });
  }

  // SET DARK MODE
  public setDarkMode()
  {
    this.toggleClicked = !this.toggleClicked;
    let dark = this.toggleClicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.appService.setDarkMode(dark);
  }
}

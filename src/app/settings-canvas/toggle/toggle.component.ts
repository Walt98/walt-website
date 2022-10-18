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

  constructor(private appService: AppService) { }

  ngOnInit(): void { }

  // SET DARK MODE
  public setDarkMode()
  {
    this.toggleClicked = !this.toggleClicked;
    let dark = this.toggleClicked ? 'on' : 'off';
    localStorage.setItem('darkMode', dark);
    this.appService.setDarkMode(dark);
  }
}

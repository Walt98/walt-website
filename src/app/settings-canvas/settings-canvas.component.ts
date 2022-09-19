import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-canvas',
  templateUrl: './settings-canvas.component.html',
  styleUrls: ['./settings-canvas.component.scss']
})
export class SettingsCanvasComponent implements OnInit
{
  public offcanvasActive: string = 'offcanvasActive';
  public colorClass: string = 'settings-button-color-default';
  public offcanvasClassList: string[] = [];

  public clicked: boolean = false;
  public color: string = '';

  constructor() { }

  ngOnInit(): void
  {
    this.offcanvasClassList.push(this.colorClass);
  }

  active()
  {
    this.offcanvasClassList.push(this.offcanvasActive);
    this.clicked = true;
  }

  activeIcon = (color: string): string => this.color == color ? 'activeIcon' : '';

  log = (event: any) => console.log(event);
}

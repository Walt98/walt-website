import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss']
})
export class SettingsSectionComponent implements OnInit
{
  @Input() header = "";

  constructor() { }

  ngOnInit(): void { }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  @Input() bg?: string;
  @Output() color: EventEmitter<string> = new EventEmitter<string>();

  public clicked: boolean = false; 

  constructor() { }

  ngOnInit(): void
  {

  }
}

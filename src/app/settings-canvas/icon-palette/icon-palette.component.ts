import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-icon-palette',
  templateUrl: './icon-palette.component.html',
  styleUrls: ['./icon-palette.component.scss']
})
export class IconPaletteComponent implements OnInit
{
  @Input() bg: string | undefined;
  @Output() color: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void
  {
    
  }

  log = (e: any) => console.log(e);
}

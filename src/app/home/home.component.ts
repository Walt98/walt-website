import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: any;
  public darkMode: boolean = false;
  public font: string = 'Montserrat';
  
  public titleStyle?: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void
  {
    this.appService.palette$.subscribe(palette => this.palette = palette);
    this.appService.darkMode$.subscribe(value => this.darkMode = value == "on");
    this.appService.font$.subscribe(font => this.font = font);
  }
}

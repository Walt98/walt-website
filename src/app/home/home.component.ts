import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IPalette } from 'src/models/palette';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  // CUSTOMIZERS
  public palette: IPalette = {};
  public darkMode: boolean = false;
  public font: string = 'Montserrat';

  constructor(private appService: AppService, private title: Title) { }

  ngOnInit(): void
  {
    this.appService.palette$.subscribe(palette => this.palette = palette);
    this.appService.darkMode$.subscribe(value => this.darkMode = value == "on");
    this.appService.font$.subscribe(font => this.font = font);
  }
}

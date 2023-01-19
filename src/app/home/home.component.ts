import { Component, OnInit } from '@angular/core';
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

  constructor(private services: AppService) { }

  ngOnInit(): void
  {
    this.services.behavSubjects$.palette$.subscribe(palette => this.palette = palette);
    this.services.behavSubjects$.darkMode$.subscribe(value => this.darkMode = value == "on");
    this.services.behavSubjects$.font$.subscribe(font => this.font = font);
  }
}

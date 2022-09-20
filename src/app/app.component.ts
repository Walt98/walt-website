import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public palette: any;

  ngOnInit(): void
  {
    let palette = localStorage.getItem('palette')
    if (palette) this.palette = JSON.parse(palette);
  }
}

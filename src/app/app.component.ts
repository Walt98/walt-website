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
    if (!localStorage.getItem('palette')) localStorage.setItem('palette', JSON.stringify({'color': '#2c82a7', 'bgImage': 'linear-gradient(147.38deg, #4C96B6 0%, #19496C 100%)'}));
    let palette = localStorage.getItem('palette');
    if (palette) this.palette = JSON.parse(palette);
  }
}

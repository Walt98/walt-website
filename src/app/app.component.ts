import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public palette: any;
  public darkMode?: boolean;

  public bgDark: string = 'linear-gradient(147.38deg, rgb(20 54 80) 0%, #000000 100%)';

  ngOnInit(): void
  {
    if (!localStorage.getItem('palette'))
    {
      this.palette = {'color': '#2c82a7', 'bgImage': 'linear-gradient(147.38deg, #4C96B6 0%, #19496C 100%)'};
      localStorage.setItem('palette', JSON.stringify(this.palette));
    }
    else this.palette = JSON.parse(localStorage.getItem('palette') ?? '');
  }

  log = (e: any) => console.log(e);
}

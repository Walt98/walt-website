import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, first, Subject } from 'rxjs';
import { BaseDirective } from 'src/app/directives/base.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseDirective implements OnInit
{
  // CUSTOMIZERS
  public biDark = "linear-gradient(147.38deg, #143650 0%, #000000 100%)";

  public isReady$ = new Subject<void>();
  public isReady = false;
  public breakpoint = false;

  ngOnInit(): void
  {
    this.$.DarkMode();
    this.$.Palette();
    this.$.Breakpoint();

    this.subscriptions();
  }

  private subscriptions()
  {
    // Remove the loading spinner
    this.isReady$.pipe(first()).subscribe(() => this.isReady = true);

    // Set the current HTML document title
    this._payload._router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((e: any) =>
    {
      let path = e.url.slice(1);
      if (!["home", "about-me", "contact-me", "technologies"].includes(path))
      {
        path = "home";
      }

      let arr = path.split("-");
      if (arr.length > 1) arr[1] = "Me";

      this._payload._translate
        .stream(`window.routes.${arr.join("")}`)
        .pipe(first())
        .subscribe((value: string) =>
          this._payload._title.setTitle(`${value} | WaltWebsite`));
    });
  }
}

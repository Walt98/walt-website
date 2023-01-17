// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SettingsCanvasComponent } from './settings-canvas/settings-canvas.component';
import { IconPaletteComponent } from './settings-canvas/icon-palette/icon-palette.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FontTextComponent } from './settings-canvas/font-text/font-text.component';
import { RadioComponent } from './settings-canvas/radio/radio.component';
import { LangSelectComponent } from './settings-canvas/lang-select/lang-select.component';
import { ToggleComponent } from './settings-canvas/toggle/toggle.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    SettingsCanvasComponent,
    IconPaletteComponent,
    ContactMeComponent,
    FontTextComponent,
    RadioComponent,
    LangSelectComponent,
    ToggleComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
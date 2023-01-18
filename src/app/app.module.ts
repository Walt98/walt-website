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
import { PaletteComponent } from './settings-canvas/components/palette/palette.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FontsComponent } from './settings-canvas/components/fonts/fonts.component';
import { RadioComponent } from './settings-canvas/components/radio/radio.component';
import { LangSelectComponent } from './settings-canvas/components/lang-select/lang-select.component';
import { ToggleComponent } from './settings-canvas/components/toggle/toggle.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsSectionComponent } from './settings-canvas/settings-section/settings-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    SettingsCanvasComponent,
    PaletteComponent,
    ContactMeComponent,
    FontsComponent,
    RadioComponent,
    LangSelectComponent,
    ToggleComponent,
    TechnologiesComponent,
    SettingsSectionComponent
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
// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';

// COMPONENTS
import { AppComponent } from '../components/app.component';
import { BaseComponent } from '../base.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from '../components/header/header.component';
import { SettingsCanvasComponent } from '../components/settings-canvas/settings-canvas.component';
import { PaletteComponent } from '../components/settings-canvas/components/palette/palette.component';
import { FontsComponent } from '../components/settings-canvas/components/fonts/fonts.component';
import { LangSelectComponent } from '../components/settings-canvas/components/lang-select/lang-select.component';
import { ToggleComponent } from '../components/settings-canvas/components/toggle/toggle.component';
import { SettingsSectionComponent } from '../components/settings-canvas/settings-section/settings-section.component';
import { BannerComponent } from '../components/banner/banner.component';
import { TextSliderComponent } from '../components/settings-canvas/components/text-slider/text-slider.component';

// ROUTES
import { HomeComponent } from '../routes/home/home.component';
import { AboutMeComponent } from '../routes/about-me/about-me.component';
import { ContactMeComponent } from '../routes/contact-me/contact-me.component';
import { TechnologiesComponent } from '../routes/technologies/technologies.component';

// OTHER
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    // COMPONENTS
    AppComponent,
    BaseComponent,
    NavbarComponent,
    HeaderComponent,
    SettingsCanvasComponent,
    PaletteComponent,
    FontsComponent,
    LangSelectComponent,
    ToggleComponent,
    SettingsSectionComponent,
    BannerComponent,
    TextSliderComponent,

    // ROUTES
    HomeComponent,
    AboutMeComponent,
    ContactMeComponent,
    TechnologiesComponent,
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

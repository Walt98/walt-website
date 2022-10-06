import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SettingsCanvasComponent } from './settings-canvas/settings-canvas.component';
import { IconPaletteComponent } from './settings-canvas/icon-palette/icon-palette.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FontTextComponent } from './settings-canvas/font-text/font-text.component';
import { RadioComponent } from './settings-canvas/radio/radio.component';
import { RadialMenuComponent } from './settings-canvas/radial-menu/radial-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LogoComponent,
    HomeComponent,
    AboutMeComponent,
    SettingsCanvasComponent,
    IconPaletteComponent,
    ContactMeComponent,
    FontTextComponent,
    RadioComponent,
    RadialMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

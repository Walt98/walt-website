import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../routes/home/home.component';
import { AboutMeComponent } from '../routes/about-me/about-me.component';
import { ContactMeComponent } from '../routes/contact-me/contact-me.component';
import { TechnologiesComponent } from '../routes/technologies/technologies.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "contact-me", component: ContactMeComponent },
  { path: "technologies", component: TechnologiesComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LinksBarComponent } from './links-bar/links-bar.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path: 'projects', component: ProjectsPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    ProjectsPageComponent,
    LinksBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

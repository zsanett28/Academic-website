import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SubjectsComponent } from './teaching/subjects/subjects.component';
import { TimetableComponent } from './teaching/timetable/timetable.component';
import { ConsultingHoursComponent } from './teaching/consulting-hours/consulting-hours.component';
import { InterestsComponent } from './research/interests/interests.component';
import { ProjectsComponent } from './research/projects/projects.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { PersonalInfosComponent } from './about_me/personal-infos/personal-infos.component';
import { CurriculumVitaeComponent } from './about_me/curriculum-vitae/curriculum-vitae.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {InfographicComponent} from "./about_me/curriculum-vitae/infographic/infographic.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SubjectsComponent,
    TimetableComponent,
    ConsultingHoursComponent,
    InterestsComponent,
    ProjectsComponent,
    PublicationsComponent,
    PersonalInfosComponent,
    CurriculumVitaeComponent,
    InfographicComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

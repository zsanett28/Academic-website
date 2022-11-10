import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {SubjectsComponent} from "./teaching/subjects/subjects.component";
import {TimetableComponent} from "./teaching/timetable/timetable.component";
import {DiplomaThesisComponent} from "./teaching/diploma-thesis/diploma-thesis.component";
import {TutorActivityComponent} from "./teaching/tutor-activity/tutor-activity.component";
import {InterestsComponent} from "./research/interests/interests.component";
import {ProjectsComponent} from "./research/projects/projects.component";
import {PublicationsComponent} from "./research/publications/publications.component";
import {PersonalInfosComponent} from "./about_me/personal-infos/personal-infos.component";
import {HobbiesComponent} from "./about_me/hobbies/hobbies.component";
import {CurriculumVitaeComponent} from "./about_me/curriculum-vitae/curriculum-vitae.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'teaching',
    children: [
      {path: 'subjects', component: SubjectsComponent},
      {path: 'timetable', component: TimetableComponent},
      {path: 'diploma_thesis', component: DiplomaThesisComponent},
      {path: 'tutor_activity', component: TutorActivityComponent},
    ]
  },
  {
    path: 'research',
    children: [
      {path: 'interests', component: InterestsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'publications', component: PublicationsComponent}
    ]
  },
  {
    path: 'about_me',
    children: [
      {path: 'personal_infos', component: PersonalInfosComponent},
      {path: 'hobbies', component: HobbiesComponent},
      {path: 'curriculum_vitae', component: CurriculumVitaeComponent},
    ]
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

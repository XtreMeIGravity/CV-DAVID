import { RepositoriesComponent } from './components/repositories/repositories.component';
import { CoursesComponent } from './components/courses/courses.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksComponent } from './components/works/works.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { KeyComponent } from './components/key/key.component';

const APP_ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent },
    {path: 'contacto', component: ContactComponent },
    {path: 'datos-personales', component: PersonalDataComponent },
    {path: 'habilidades', component: SkillsComponent },
    {path: 'idiomas', component: IdiomasComponent },
    {path: 'estudios', component: StudiesComponent },
    {path: 'experiencia-laboral', component: ExperienceComponent },
    {path: 'trabajos', component: WorksComponent },
    {path: 'experiencia-laboral', component: ExperienceComponent },
    {path: 'trabajos', component: WorksComponent },
    {path: 'cursos', component: CoursesComponent },
    {path: 'repositorios', component: RepositoriesComponent },
    {path: 'key', component:KeyComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
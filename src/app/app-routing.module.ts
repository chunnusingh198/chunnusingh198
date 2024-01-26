import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'About_Us',
  component: AboutusComponent
},
{
  path: 'Projects',
  component: ProjectComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

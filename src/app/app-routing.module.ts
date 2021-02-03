import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NoLoginOrRegisterGuard } from './no-login-or-register.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'movieDetails/:id',component:MovieDetailsComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'login',canActivate:[NoLoginOrRegisterGuard], component:LoginComponent},
  {path:'register',canActivate:[NoLoginOrRegisterGuard],component:RegistrationComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './+home/home.component';
import { SigninComponent } from './+signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

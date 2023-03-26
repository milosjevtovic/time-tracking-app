import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { InformationComponent } from './information/information.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { trackable: true, name: "Home" }},
  { path: 'information', component: InformationComponent, canActivate: [AuthGuard], data: { trackable: true, name: "Information"}}, 
  { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard], data: { trackable: true, name: "Summary" }}, 
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

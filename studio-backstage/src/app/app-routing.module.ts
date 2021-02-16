import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';

const routes: Routes = [{
  path: 'SignIn',
  component: SignInComponent
},
{
  path: 'Dashboard',
  component: DashboardComponent
},
{
  path: '',
  component: DashboardComponent
},
{
  path: '**',
  redirectTo: 'SignIn',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

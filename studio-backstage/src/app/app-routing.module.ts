import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/account/sign-in/sign-in.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/Guards/auth-guard/auth.guard';
import { JumpAwayGuardGuard } from './shared/Guards/jump-away-guard/jump-away-guard.guard';

const routes: Routes = [{
  path: '',
  component: SignInComponent
},
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  canDeactivate: [JumpAwayGuardGuard],
  component: DashboardComponent,
  children: [
    { path: '', component: HomeComponent },
    {
      path: 'pages',
      loadChildren: () => import('./pages/pages-routing.module')
        .then(mod => mod.PagesRoutingModule)
    },
    {
      path: 'example',
      loadChildren: () => import('./components/example/example-routing.module')
        .then(mod => mod.ExampleRoutingModule)
    }
  ]
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

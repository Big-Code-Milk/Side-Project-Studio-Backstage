import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/account/sign-in/sign-in.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/Guards/auth-guard/auth.guard';
import { JumpAwayGuardGuard } from './shared/Guards/jump-away-guard/jump-away-guard.guard';
import { environment } from '../environments/environment';

let routes: Routes = RouterHandler();
console.log(routes);
function RouterHandler() {
  if (environment.production) {
    return [{
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
  } else { // 開發中 Router Path
    return [
      {
        path: 'dashboard',
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
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }]
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

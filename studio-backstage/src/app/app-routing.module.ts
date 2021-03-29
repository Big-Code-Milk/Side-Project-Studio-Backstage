import { EditorMdComponent } from './components/layout/editor-md/editor-md.component';
// 參考
// 路由帶參數 https://medium.com/chikuwa-tech-study/angular-%E7%AC%AC9%E8%AA%B2-%E8%B7%AF%E7%94%B1%E6%94%9C%E5%B8%B6%E5%8F%83%E6%95%B8-39a4d4f05448

import { OrganizeComponent } from './backstage-pages/getting-things-done/components/organize/organize.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './backstage-pages/account/pages/sign-in/sign-in.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HomeComponent } from './backstage-pages/home/home.component';
import { AuthGuard } from './shared/Guards/auth-guard/auth.guard';
import { JumpAwayGuardGuard } from './shared/Guards/jump-away-guard/jump-away-guard.guard';
import { environment } from '../environments/environment';
import { EditorComponent } from './components/example/editor-fail/editor.component';
import { EditorTabComponent } from './components/layout/editor-tab/editor-tab.component';
import { UsefulLinksTreeComponent } from './components/layout/useful-links-tree/useful-links-tree.component';

let routes: Routes = RouterHandler();
// console.log(routes); environment.production
function RouterHandler() {
  if (true) {
    return [{
      path: '',
      component: SignInComponent// SignInComponent // UsefulLinksTreeComponent
    },
    {
      path: 'dashboard',
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      canDeactivate: [JumpAwayGuardGuard], // 跳出時
      component: DashboardComponent,
      children: [
        { path: '', component: HomeComponent },
        {
          path: 'pages', // 實際頁面
          loadChildren: () => import('./backstage-pages/pages-routing.module')
            .then(mod => mod.PagesRoutingModule)
        },
        {
          path: 'example', // 功能範例
          loadChildren: () => import('./components/example/example-routing.module')
            .then(mod => mod.ExampleRoutingModule)
        },
        {
          path: 'template', // 單純版型
          loadChildren: () => import('./components/template/template-routing.module')
            .then(mod => mod.TemplateRoutingModule)
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
            loadChildren: () => import('./backstage-pages/pages-routing.module')
              .then(mod => mod.PagesRoutingModule)
          },
          {
            path: 'example',
            loadChildren: () => import('./components/example/example-routing.module')
              .then(mod => mod.ExampleRoutingModule)
          },
          {
            path: 'template', // 單純版型
            loadChildren: () => import('./components/template/template-routing.module')
              .then(mod => mod.TemplateRoutingModule)
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizeComponent } from './getting-things-done/components/organize/organize.component';
import { CollectThenOrganizeComponent } from './getting-things-done/pages/collect-then-organize/collect-then-organize.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gettingthingsdone', component: CollectThenOrganizeComponent },
  { path: 'organize', component: OrganizeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

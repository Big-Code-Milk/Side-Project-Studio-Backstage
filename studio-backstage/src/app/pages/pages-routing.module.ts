import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GettingThingsDoneComponent } from './getting-things-done/getting-things-done.component';
import { OrganizeComponent } from './getting-things-done/organize/organize.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gettingthingsdone', component: GettingThingsDoneComponent },
  { path: 'organize', component: OrganizeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

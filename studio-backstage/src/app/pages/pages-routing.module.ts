import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GettingThingsDoneComponent } from './getting-things-done/getting-things-done.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'GettingThingsDone', component: GettingThingsDoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirebaseComponent } from './angular-fire-base/angular-firebase.component';

const routes: Routes = [
  { path: 'AngularFirebase', component: AngularFirebaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

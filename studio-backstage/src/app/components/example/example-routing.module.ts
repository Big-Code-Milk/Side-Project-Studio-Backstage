import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirebaseComponent } from './angular-fire-base/angular-firebase.component';
import { ShareServiceComponent } from './share-service/share-service.component';

const routes: Routes = [
  { path: 'AngularFirebase', component: AngularFirebaseComponent },
  { path: 'ShareService', component: ShareServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorMdComponent } from '../layout/editor-md/editor-md.component';
import { AngularFirebaseComponent } from './angular-fire-base/angular-firebase.component';
import { EditorComponent } from './editor-fail/editor.component';
import { ShareServiceComponent } from './share-service/share-service.component';

const routes: Routes = [
  { path: 'angularfirebase', component: AngularFirebaseComponent },
  { path: 'shareservice', component: ShareServiceComponent },
  { path: 'editorfail', component: EditorComponent },
  { path: 'editormd', component: EditorMdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }

import { OrganizeComponent } from './getting-things-done/components/organize/organize.component';
import { ProcessThenWorkComponent } from './getting-things-done/pages/process-then-work/process-then-work.component';
import { ContentMgmtComponent } from './content-mgmt-system/pages/content-mgmt/content-mgmt.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectThenOrganizeComponent } from './getting-things-done/pages/collect-then-organize/collect-then-organize.component';
import { EditContentComponent } from './content-mgmt-system/pages/edit-content/edit-content.component';
import { LinktreeMgmtComponent } from '../shared/components/layout/linktree-mgmt/linktree-mgmt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'processthenwork', component: ProcessThenWorkComponent },
  { path: 'collectthenorganize', component: CollectThenOrganizeComponent },
  { path: 'contentmgmt', component: ContentMgmtComponent },
  { path: 'editcontent', component: EditContentComponent },
  { path: 'organize', component: OrganizeComponent }, // 點擊進入任務編輯
  { path: 'linktreemgmt', component: LinktreeMgmtComponent }, // 友站連結管理
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
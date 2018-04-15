import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VcmanagerAppComponent } from './vcmanager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  { path: '', component: VcmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcmanagerRoutingModule {}

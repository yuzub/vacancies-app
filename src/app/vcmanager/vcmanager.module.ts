import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';

import { VcmanagerRoutingModule } from './vcmanager-routing.module';
import { VcmanagerAppComponent } from './vcmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    VcmanagerRoutingModule
  ],
  declarations: [VcmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class VcmanagerModule { }

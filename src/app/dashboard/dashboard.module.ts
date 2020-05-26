import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from '../nav/sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, SidebarComponent]
})
export class DashboardPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LunchPageRoutingModule } from './lunch-routing.module';

import { LunchPage } from './lunch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunchPageRoutingModule
  ],
  declarations: [LunchPage]
})
export class LunchPageModule {}

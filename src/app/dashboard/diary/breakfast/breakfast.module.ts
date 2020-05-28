import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastPageRoutingModule } from './breakfast-routing.module';

import { BreakfastPage } from './breakfast.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BreakfastPageRoutingModule
  ],
  declarations: [BreakfastPage]
})
export class BreakfastPageModule {}

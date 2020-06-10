import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmrCalculatorPageRoutingModule } from './bmr-calculator-routing.module';

import { BmrCalculatorPage } from './bmr-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmrCalculatorPageRoutingModule
  ],
  declarations: [BmrCalculatorPage]
})
export class BmrCalculatorPageModule {}

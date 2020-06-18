import { NgModule } from '@angular/core';

import { BmrCalculatorPageRoutingModule } from './bmr-calculator-routing.module';

import { BmrCalculatorPage } from './bmr-calculator.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    BmrCalculatorPageRoutingModule,
    SharedModule
  ],
  declarations: [BmrCalculatorPage]
})
export class BmrCalculatorPageModule {}

import { NgModule } from '@angular/core';

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

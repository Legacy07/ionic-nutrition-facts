import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsPageRoutingModule } from './foods-routing.module';

import { FoodsPage } from './foods.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalorieBreakdownComponent } from './calorie-breakdown/calorie-breakdown.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    SharedModule,
    FoodsPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  exports: [
    Ng2GoogleChartsModule
  ],
  declarations: [FoodsPage, CalorieBreakdownComponent]
})
export class FoodsPageModule {}

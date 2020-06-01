import { NgModule } from '@angular/core';

import { DiaryPageRoutingModule } from './diary-routing.module';

import { DiaryPage } from './diary.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DiaryPageRoutingModule
  ],
  declarations: [DiaryPage]
})
export class DiaryPageModule {}

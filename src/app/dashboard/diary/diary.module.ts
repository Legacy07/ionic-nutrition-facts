import { NgModule } from '@angular/core';

import { DiaryPageRoutingModule } from './diary-routing.module';

import { DiaryPage } from './diary.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditServingSizeComponent } from './edit-serving-size/edit-serving-size.component';

@NgModule({
  imports: [
    SharedModule,
    DiaryPageRoutingModule
  ],
  declarations: [DiaryPage, EditServingSizeComponent]
})
export class DiaryPageModule {}

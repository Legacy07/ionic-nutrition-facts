import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryPage } from './diary.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryPage,
    children: [
      {
        path: 'breakfast',
        loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryPageRoutingModule {}

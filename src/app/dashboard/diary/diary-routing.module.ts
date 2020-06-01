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
        loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule),
      },
      {
        path: 'lunch',
        loadChildren: () => import('./lunch/lunch.module').then( m => m.LunchPageModule)
      },
      {
        path: 'dinner',
        loadChildren: () => import('./dinner/dinner.module').then( m => m.DinnerPageModule)
      },
      {
        path: 'snack',
        loadChildren: () => import('./snack/snack.module').then( m => m.SnackPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryPageRoutingModule {}

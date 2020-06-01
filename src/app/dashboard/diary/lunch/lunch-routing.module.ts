import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunchPage } from './lunch.page';

const routes: Routes = [
  {
    path: '',
    component: LunchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunchPageRoutingModule {}

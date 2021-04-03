import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSalePage } from './show-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSalePageRoutingModule {}

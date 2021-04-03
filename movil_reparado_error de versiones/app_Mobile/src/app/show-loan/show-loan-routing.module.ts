import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowLoanPage } from './show-loan.page';

const routes: Routes = [
  {
    path: '',
    component: ShowLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowLoanPageRoutingModule {}

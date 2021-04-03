import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassSelPage } from './class-sel.page';

const routes: Routes = [
  {
    path: '',
    component: ClassSelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassSelPageRoutingModule {}

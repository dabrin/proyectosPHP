import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSalePageRoutingModule } from './show-sale-routing.module';

import { ShowSalePage } from './show-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSalePageRoutingModule
  ],
  declarations: [ShowSalePage]
})
export class ShowSalePageModule {}

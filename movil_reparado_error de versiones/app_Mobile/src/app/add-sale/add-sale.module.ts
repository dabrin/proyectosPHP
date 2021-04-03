import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSalePageRoutingModule } from './add-sale-routing.module';

import { AddSalePage } from './add-sale.page';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSalePageRoutingModule,PipesModule
  ],
  declarations: [AddSalePage]
})
export class AddSalePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoansPageRoutingModule } from './loans-routing.module';
import { LoansPage } from './loans.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoansPageRoutingModule,
    PipesModule
  ],
  declarations: [LoansPage]
})
export class LoansPageModule {}

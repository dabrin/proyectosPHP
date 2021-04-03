import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassSelPageRoutingModule } from './class-sel-routing.module';

import { ClassSelPage } from './class-sel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassSelPageRoutingModule
  ],
  declarations: [ClassSelPage]
})
export class ClassSelPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPaquetePageRoutingModule } from './add-paquete-routing.module';

import { AddPaquetePage } from './add-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPaquetePageRoutingModule
  ],
  declarations: [AddPaquetePage]
})
export class AddPaquetePageModule {}

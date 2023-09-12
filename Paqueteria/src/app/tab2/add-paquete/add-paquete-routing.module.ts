import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPaquetePage } from './add-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPaquetePageRoutingModule {}

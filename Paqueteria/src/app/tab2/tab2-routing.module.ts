import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'paquetes-detail',
    loadChildren: () => import('./paquetes-detail/paquetes-detail.module').then( m => m.PaquetesDetailPageModule)
  },
  {
    path: 'add-paquete',
    loadChildren: () => import('./add-paquete/add-paquete.module').then( m => m.AddPaquetePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'repartidores-detail',
    loadChildren: () => import('./repartidores-detail/repartidores-detail.module').then( m => m.RepartidoresDetailPageModule)
  },
  {
    path: 'add-repartidor',
    loadChildren: () => import('./add-repartidor/add-repartidor.module').then( m => m.AddRepartidorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}

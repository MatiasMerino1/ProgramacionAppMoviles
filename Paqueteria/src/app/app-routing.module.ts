import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'paquetes',
    children:[
      {
        path: '',
        loadChildren: () => import('./tab2/tab2.module').then( m=> m.Tab2PageModule)
      },
      {
        path:'new-paquete',
        loadChildren: () => import('./tab2/add-paquete/add-paquete-routing.module').then (m=> m.AddPaquetePageRoutingModule)
      },
      {
        path:':paqueteId',
        loadChildren: () => import('./tab2/paquetes-detail/paquetes-detail.module').then (m=> m.PaquetesDetailPageModule)
      },
    ]
  },
  {
    path:'new-paquete',
    loadChildren: () => import('./tab2/add-paquete/add-paquete-routing.module').then (m=> m.AddPaquetePageRoutingModule)
  },
  {path:'repartidores',
  children:[
    {
      path:'',
      loadChildren:() => import('./tab3/tab3.module').then (m=> m.Tab3PageModule)
    },
    {
      path:'new-repartidor',
      loadChildren:() => import('./tab3/add-repartidor/add-repartidor-routing.module').then (m=> m.AddRepartidorPageRoutingModule)
    },
    {
      path:':repartidorId',
      loadChildren:() => import('./tab3/repartidores-detail/repartidores-detail.module').then(m=> m.RepartidoresDetailPageModule)
    }
  ]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

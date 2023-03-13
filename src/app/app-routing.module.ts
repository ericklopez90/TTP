import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'telefono',
    loadChildren: () => import('./views/phone/phone.module').then(m => m.PhoneModule)
  },
  {
    path: 'control-remoto',
    loadChildren: () => import('./views/remote-control/remote-control.module').then(m => m.RemoteControlModule)
  },
  {
    path: 'on-demand',
    loadChildren: () => import('./views/ondemand/ondemand.module').then(m => m.OndemandModule)
  },
  {
    path: 'television',
    loadChildren: () => import('./views/television/television.module').then(m => m.TelevisionModule )
  },
  {
    path: 'estado-de-cuenta',
    loadChildren: () => import('./views/status-pay/status-pay.module').then(m => m.StatusPayModule )
  },
  {
    path: '',
    loadChildren: () => import('./views/start/start.module').then(m => m.StartModule )
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

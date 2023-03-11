import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'control-remoto',
    loadChildren: () => import('./views/remote-control/remote-control.module').then(m => m.RemoteControlModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

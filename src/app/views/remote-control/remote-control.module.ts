import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteControlComponent } from './remote-control.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RemoteControlComponent,
  }
];

@NgModule({
  declarations: [
    RemoteControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  
})
export class RemoteControlModule { }

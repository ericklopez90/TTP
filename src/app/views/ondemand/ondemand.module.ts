import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OndemandComponent } from './ondemand.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OndemandComponent,
  }
];

@NgModule({
  declarations: [
    OndemandComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [OndemandComponent]
})
export class OndemandModule { }

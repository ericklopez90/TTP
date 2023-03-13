import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPayComponent } from './status-pay.component';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: StatusPayComponent,
  }
];

@NgModule({
  declarations: [
    StatusPayComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatDividerModule
  ],
  exports: [StatusPayComponent]
})
export class StatusPayModule { }

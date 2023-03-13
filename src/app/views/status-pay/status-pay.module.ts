import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPayComponent } from './status-pay.component';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: StatusPayComponent,
  }
];

@NgModule({
  declarations: [
    StatusPayComponent,
    CardComponent
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

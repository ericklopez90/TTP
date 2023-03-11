import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelevisionComponent } from './television.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TelevisionComponent,
  }
];


@NgModule({
  declarations: [
    TelevisionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [TelevisionComponent]
})
export class TelevisionModule { }

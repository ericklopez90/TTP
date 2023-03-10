import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule { }

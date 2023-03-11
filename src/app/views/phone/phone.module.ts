import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PhoneComponent,
  }
];

@NgModule({
  declarations: [
    PhoneComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PhoneComponent]
  
})
export class PhoneModule { }

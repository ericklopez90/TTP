import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { CardComponent } from './components/card/card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  }
];

@NgModule({
  declarations: [
    StartComponent,
    CardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [StartComponent]
})
export class StartModule { }

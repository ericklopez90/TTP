import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelevisionComponent } from './television.component';
import { Routes, RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  {
    path: '',
    component: TelevisionComponent,
  }
];


@NgModule({
  declarations: [
    TelevisionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule
  ],
  exports: [TelevisionComponent]
})
export class TelevisionModule { }

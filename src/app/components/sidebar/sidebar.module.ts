import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { LinksComponent } from './components/links/links.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    LinksComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
    
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }

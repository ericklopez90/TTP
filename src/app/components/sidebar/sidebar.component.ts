import { Component, Output, EventEmitter } from '@angular/core';
import { linksPrimaryDummy, linksSecondaryDummy, linksMoreDummy } from './sidebar.dummy'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  linksPrimary = linksPrimaryDummy
  linksSecondary = linksSecondaryDummy
  linksMore = linksMoreDummy
  iconLogo = "../../assets/icons/logo.svg"

  sideBarActive = true;
  @Output() desactiveSideBarEvent = new EventEmitter<boolean>();
  @Output() desactiveSideBarrEvent = new EventEmitter<boolean>();

  constructor(private router:Router){
  }

  desactiveSideBar():void{
    this.sideBarActive = true ? false : true
     this.desactiveSideBarEvent.emit(this.sideBarActive)
  }

  backIndex(){
    this.router.navigateByUrl("/")
    this.desactiveSideBarEvent.emit(false);
  }

}

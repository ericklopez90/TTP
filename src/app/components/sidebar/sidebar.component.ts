import { Component, Output, EventEmitter } from '@angular/core';
import { linksPrimaryDummy, linksSecondaryDummy, linksMoreDummy } from './sidebar.dummy'

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

  desactiveSideBar():void{
    this.sideBarActive = true ? false : true
     this.desactiveSideBarEvent.emit(this.sideBarActive)
  }

}

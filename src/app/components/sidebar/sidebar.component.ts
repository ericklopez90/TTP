import { Component } from '@angular/core';
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

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  @Input() sideBarOn = false;

  actSideBar(event: boolean){
    this.sideBarOn = event == true ? false : true
  }
}

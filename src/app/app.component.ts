import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TTP';

  
  @Input() sideBarOn = false;

  actSideBar(event: boolean){
    this.sideBarOn = event == true ? false : true
  }

  desactiveSideBar(event: boolean){
    console.log(this.sideBarOn)
    this.sideBarOn = event
  }
}

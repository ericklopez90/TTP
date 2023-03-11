import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  iconLogo = "../../assets/icons/logoWhite.svg";
  @Output() buttonHambEvent = new EventEmitter<boolean>();

  actButtonHam():void{
     this.buttonHambEvent.emit(false)
  }

}

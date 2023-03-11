import { Component } from '@angular/core';
import { buttonsPhone } from './phone.dummy';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {

  buttonsPhone = buttonsPhone

}

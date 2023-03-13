import { Component } from '@angular/core';
import { statusPay, description } from './status-pay.dummy';

@Component({
  selector: 'app-status-pay',
  templateUrl: './status-pay.component.html',
  styleUrls: ['./status-pay.component.scss']
})
export class StatusPayComponent {

  status = statusPay;
  description = description;

}

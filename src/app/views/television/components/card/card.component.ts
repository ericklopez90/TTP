import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cards } from '../../television.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() dataCard: Cards[] = [];
  @Output() linkButtonEvent = new EventEmitter<string>();

  cambiar(link: string):void{
    this.linkButtonEvent.emit(link)
  }
}

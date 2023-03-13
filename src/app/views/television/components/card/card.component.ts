import { Component, Input, Output, EventEmitter } from '@angular/core';
import { card } from '../../television.dummy'
import { Cards } from '../../television.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  link = "";
  @Input() dataCard: Cards[] = [];
  @Output() linkButtonEvent = new EventEmitter<string>();

  cambiar(link: string):void{
    this.link = link
    this.linkButtonEvent.emit(this.link)
  }

}

import { card } from './television.dummy';
import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})

export class TelevisionComponent {
  videoId = 'sPSkK2_NwRo';
  cards = card ;

  constructor() {}

  change(event: string){
    this.videoId = event;
  }
}
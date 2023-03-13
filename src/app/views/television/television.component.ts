import { card } from './television.dummy';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})

export class TelevisionComponent implements OnInit {
  apiLoaded = false;
  height = 300;
  width = 400;
  videoId = 'sPSkK2_NwRo';
  cards = card ;
  constructor() {}
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  change(event: string){
    this.videoId = event;
    console.log(this.videoId)
  }
}

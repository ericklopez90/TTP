import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  @Input() principalButton = false; 
  @Input() text = "";
  @Input() icon = "";
  @Input() actionPrincipal = "";
  @Input() action = false;
  @Input() link = "#"
  
  constructor(private router:Router){
  }

  routerNavigate(link:string){
    this.router.navigateByUrl("/"+link)
  }
}

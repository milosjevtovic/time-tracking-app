import { Component } from '@angular/core';
import { LocalService } from '../_services/local.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ LocalService ]
})
export class HomeComponent {
   constructor(public localStore: LocalService, private router: Router) {}
   ngOnInit() {

   } 
}

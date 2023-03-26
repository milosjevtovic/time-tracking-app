import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './_services/local.service';
import { UsersService } from './_services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time Tracking App';

  constructor(public localStore: LocalService, private usersService : UsersService, private router:Router) {}

  ngOnInit(): void {
  }

}

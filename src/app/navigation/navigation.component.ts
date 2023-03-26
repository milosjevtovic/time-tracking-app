import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { LocalService } from '../_services/local.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(
    public router : Router, 
    public auth : AuthService, 
    private localStore : LocalService,
    private usersService : UsersService
    ) {}

  logout(event : Event) : void {
    this.usersService.logout(this.localStore.get('username')!);
    this.router.navigateByUrl('/login');
  }
}

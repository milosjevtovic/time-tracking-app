import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStore : LocalService) { 

  }

  isLoggedIn() {
    return this.localStore.get('username') !== null;
  }

}

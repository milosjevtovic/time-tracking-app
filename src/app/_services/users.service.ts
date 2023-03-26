import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { User } from '../_models/user';
import { plainToInstance, instanceToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersMap!: Map<string, User>;

  constructor(private localStore:LocalService) { }

  public updateUserPage(page : string) {
    this.syncUsers();
    let currentUser = (this.usersMap.get(this.localStore.get('username')!)!);
    currentUser.setActivePage(page);
    this.usersMap.set(this.localStore.get('username')!, currentUser);
    this.storeUsers();
  }

  private storeUsers() : void {
    // Update local storage to contain latest changes to users
    this.localStore.set('users', JSON.stringify(instanceToPlain(Array.from(this.usersMap.entries()))));
  }

  private syncUsers() : void {
    // Update local users map to contain data from the local storage
    let usersArray = JSON.parse(this.localStore.get('users')!);
    this.usersMap = new Map<string, User>();
    usersArray.forEach((element: any[]) => {
      let jsonUser = element[1] as Object;
      let newUser = plainToInstance(User, jsonUser);
      this.usersMap.set(element[0], newUser as User);
    });
  }

  public loginUser(username : string) : void {
    if (this.localStore.exists('users')) {
      this.syncUsers();
      if (!this.usersMap.has(username)) {
        this.usersMap.set(username, new User(username));
      }
      else {
        let currentUser = this.usersMap.get(username);
        currentUser!.login(); 
        this.usersMap.set(username, currentUser!);
        this.storeUsers();
      }
      this.localStore.set('username', username);
      this.storeUsers();
    }
    else {
      this.localStore.set('username', username);
      this.usersMap = new Map<string, User>();
      this.usersMap.set(username, new User(username));
      this.storeUsers();
    }
  }

  public logout(username : string) : void {
    this.syncUsers();
    let currentUser = (this.usersMap.get(this.localStore.get('username')!)!);
    currentUser.logout();
    this.usersMap.set(this.localStore.get('username')!, currentUser);
    this.storeUsers();
    this.localStore.delete('username');
  }
}

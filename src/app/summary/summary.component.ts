import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../_services/local.service';
import { UsersService } from '../_services/users.service';
import { User } from '../_models/user';
import { Subscription, timer, map, share } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor( public router : Router, public users : UsersService, private localStore : LocalService) {};
  currentUser : User | undefined;
  trackableRoutes : Array<string> = [];
  joinedArrays: any[] = [];
  subscription!: Subscription;
  displayedColumns: string[] = ['name', 'time'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  ngOnInit() {
    this.trackableRoutes = (this.router.config.filter(route => route.data !== undefined && route.data['trackable'] === true)).map(route =>  route.data!['name']);
    this.currentUser = this.users.usersMap.get(this.localStore.get('username')!);
    this.subscription = timer(0, 100)
      .subscribe(() => {
        let i = 0;
        this.trackableRoutes.forEach(route => {
          this.joinedArrays[i++] = {name: route, time:this.currentUser?.timeSpentOnPageToString(route)};
        });
        this.dataSource.data = this.joinedArrays;
      });
  }
}

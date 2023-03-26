import { Component } from '@angular/core';
import { LocalService } from '../_services/local.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LocalService ]
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    public localStore: LocalService, 
    private router: Router,
    private usersService: UsersService,
    ) {}  

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.form.invalid) {
      return;
    }

    this.usersService.loginUser(this.form.controls['username'].value);
    
    this.router.navigateByUrl('/');
  }
}

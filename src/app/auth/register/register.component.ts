import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {LocalerService} from './../../core/service/localer.service';
import { AuthService } from './../../core/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const USER_STORAGE_KEY = 'users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formReactive: FormGroup;
  err: any;
  constructor(
    private formBuilder: FormBuilder,
    private localerService: LocalerService,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const listUserString = this.localerService.getLocalStorage(USER_STORAGE_KEY);
    const listUser = listUserString ? JSON.parse(listUserString) : [];
    if (listUser.lenght !== 0 && (listUser.find(user => {
      return user.email === this.formReactive.controls.email.value;
    }))) {
      this.err = 'Email is already exist!';
      return;
    }
    this.err = null;
    const saveValue = this.formReactive.value;
    delete saveValue.confirmPassword;
    listUser.push(saveValue);
    this.localerService.saveLocalStorage(USER_STORAGE_KEY, JSON.stringify(listUser));
    this.authService.login().subscribe(ob => {
      this.authService.userLogin = saveValue;
      this.cookieService.set('userEmail', saveValue.email.toString());
      this.router.navigate([this.authService.redirectUrl || '/account/dashboard']);
    });
  }
}

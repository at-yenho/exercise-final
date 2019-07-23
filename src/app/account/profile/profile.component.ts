import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeactiveDialogService } from './../../core/service/deactive-dialog.service';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalerService } from './../../core/service/localer.service';
import { AuthService } from './../../core/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  userbefore: any;
  fileTypeWrong = false;
  err = null;
  success = null;
  formReactive: FormGroup;
  constructor(
    private dialogService: DeactiveDialogService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private localerService: LocalerService,
    private cookieService: CookieService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.route.data.subscribe((data: { profile: any }) => {
      this.user = data.profile ? {...data.profile} : null;
      this.userbefore = data.profile ? {...data.profile} : null;
    });
    this.formReactive = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      confirmPassword: [''],
      avatar: [''],
    });
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('You have unsaved changes! If you leave, your changes will be lost!');
  }
  onFileChange(e) {
    if (e.target.files.length > 0) {
      if (!e.target.files[0].type.includes('image')) {
        this.fileTypeWrong = true;
        return;
      }
      this.fileTypeWrong = false;
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this.user.avatar = reader.result;
        $('#avatar').attr('src', reader.result);
      };
    }
  }
  onSubmit() {
    if (this.formReactive.controls.password.value) {
      this.user.password = this.formReactive.controls.password.value || this.user.password;
    }
    const listUserString = this.localerService.getLocalStorage('users');
    const listUser = listUserString ? JSON.parse(listUserString) : [];
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].email === this.userbefore.email) {
        listUser[i] = this.user;
      } else if (listUser[i].email === this.user.email) {
        this.success = null;
        this.err = 'Email is already exist!';
        return;
      }
    }
    this.err = null;
    this.success = 'Update successfull!';
    this.authService.userLogin = {...this.user};
    const likeProducts = this.authService.userLogin ?
        JSON.parse(this.localerService.getLocalStorage(this.userbefore.email)) : null;
    localStorage.removeItem(this.userbefore.email);
    this.userbefore = {...this.user};
    this.formReactive.controls.password.setValue('');
    this.formReactive.controls.confirmPassword.setValue('');
    this.localerService.saveLocalStorage('users', JSON.stringify(listUser));
    this.cookieService.set('userEmail', this.user.email.toString());
    this.localerService.saveLocalStorage(this.authService.userLogin.email, JSON.stringify(likeProducts));
  }
  hasUnsavedData() {
    return this.user ? (this.user.avatar !== this.userbefore.avatar)
      || (this.formReactive.dirty  && (this.user.email !== this.userbefore.email
      || this.user.firstName !== this.userbefore.firstName
      || this.user.lastName !== this.userbefore.lastName
      || this.formReactive.controls.password.value !== '')) : false;
  }
}

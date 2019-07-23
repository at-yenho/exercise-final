import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService
    ) {
      console.log('AuthComponent');
      console.log(authService.isLoggedIn);
    }

  ngOnInit() {
  }

}

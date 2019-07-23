import { Component } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalerService } from './core/service/localer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  title = 'exercise-final';
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private localerService: LocalerService,
    private router: Router
  ) {

    const cart = this.localerService.getLocalStorage('cart');
    this.authService.cart = cart ? JSON.parse(cart) : [];
    this.authService.totalItemInCart = this.authService.cart.reduce((acc, val) => acc += val.quantity, 0);
    const email = cookieService.get('userEmail');
    if (email) {
      const listUserString = this.localerService.getLocalStorage('users');
      const listUser = listUserString ? JSON.parse(listUserString) : [];
      authService.isLoggedIn = true;
      authService.userLogin = listUser.find(item => {
        return item.email === email;
      });
    }
    this.router.events.subscribe( e => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 0);
      }
    });
  }
}

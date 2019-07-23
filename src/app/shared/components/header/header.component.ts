import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './../../../core/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    public authService: AuthService,
  ) {
  }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.cookieService.delete('userEmail');
    location.reload();
  }
}

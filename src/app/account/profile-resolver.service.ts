import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, from } from 'rxjs';
import { ApiService } from '../core/service/api.service';
import { AuthService } from '../core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any> {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    return  of(this.authService.userLogin);
  }
}

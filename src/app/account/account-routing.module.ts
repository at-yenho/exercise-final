import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileResolverService } from './profile-resolver.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmDeactiveGuard } from './confirm-deactive.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [ ConfirmDeactiveGuard ],
        resolve: {
          profile: ProfileResolverService
        }
      },
      {
        path: 'favorite',
        component: FavoriteComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

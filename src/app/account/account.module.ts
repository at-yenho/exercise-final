import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AccountComponent, ProfileComponent, FavoriteComponent, DashboardComponent ],
  imports: [
    CommonModule,
    FormsModule,
    // omit warning when use ngModel and formControlName in reactive form
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SharedModule,
    NgbPaginationModule,
    AccountRoutingModule
  ],
})
export class AccountModule { }

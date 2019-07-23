import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideshowModule} from 'ng-simple-slideshow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from './../shared/shared.module';
import {ApiService} from './../core/service/api.service';
import { DeactiveDialogService } from '../core/service/deactive-dialog.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './products/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ DetailComponent, HomeComponent, ProductsComponent, CartComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbPaginationModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    SlideshowModule,
    BrowserAnimationsModule,
    FeaturesRoutingModule
  ],
})
export class FeaturesModule { }

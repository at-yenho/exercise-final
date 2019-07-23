import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { ActiveGuard } from './active.guard';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './products/detail/detail.component';
import { CartComponent } from './cart/cart.component';

const catePaths = [
  'woman',
  'man',
  'children'
];
const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [ActiveGuard],
    canActivateChild: [ActiveGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        matcher: categoriesUrl,
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: DetailComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
export function categoriesUrl(url: UrlSegment[]) {
  return url.length === 1 && (catePaths.includes(url[0].path)) ? ({consumed: url}) : null;
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../core/service/api.service';
import { LocalerService } from './../../../core/service/localer.service';
import { AuthService } from './../../../core/service/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: any;
  constructor(
    private acroute: ActivatedRoute,
    private route: Router,
    public authService: AuthService,
    private apiService: ApiService,
    private localerService: LocalerService
  ) {
    apiService.getAssets('data/products.json').then( ob => {
      this.acroute.paramMap.subscribe(params => {
        this.product = ob.find(item => {
          return item.id === Number(params.get('id'));
        });
        if (!this.product) {
          this.route.navigate(['/not-found']);
          return;
        }
        // tslint:disable-next-line:max-line-length
        const likeProducts = this.authService.userLogin ? JSON.parse(this.localerService.getLocalStorage(this.authService.userLogin.email)) : [];
        this.product.isLiked = likeProducts ? likeProducts.includes(this.product.id) ? true : false : false;
      });
    }).catch( (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
  removeToFavorite(id) {
    let likeProducts = JSON.parse(this.localerService.getLocalStorage(this.authService.userLogin.email));
    likeProducts = likeProducts.filter(item => {
      return item !== id;
    });
    this.localerService.saveLocalStorage(this.authService.userLogin.email, JSON.stringify(likeProducts));
    this.product.isLiked = false;
  }
  addToFavorite(id) {
    const likeProducts = JSON.parse(this.localerService.getLocalStorage(this.authService.userLogin.email)) || [];
    likeProducts.push(id);
    this.localerService.saveLocalStorage(this.authService.userLogin.email, JSON.stringify(likeProducts));
    this.product.isLiked = true;
  }
  addToCart() {
    const indexItemIncart = this.authService.cart.findIndex(ele => {
      return ele.identify === this.product.id;
    });
    if (indexItemIncart !== -1) {
      this.authService.cart[indexItemIncart].quantity++;
    } else {
      this.authService.cart.push({identify: this.product.id, quantity: 1});
    }
    this.authService.totalItemInCart++;
    this.localerService.saveLocalStorage('cart', JSON.stringify(this.authService.cart));
  }
}

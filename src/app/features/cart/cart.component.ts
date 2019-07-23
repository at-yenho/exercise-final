import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../core/service/api.service';
import { AuthService } from './../../core/service/auth.service';
import { LocalerService } from './../../core/service/localer.service';
import { ModalComponent } from './../../shared/components/modal/modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart = [];
  totalPrice = 0;
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(
    private apiService: ApiService,
    private localerService: LocalerService,
    private acroute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
    ) {
    apiService.getAssets('data/products.json').then( ob => {
      this.authService.cart.map(ele => {
        const item = ob.find(val => {
          return val.id === ele.identify;
        });

        if (item) {
          item.quantity = ele.quantity;
          this.totalPrice += item.price * item.quantity;
          this.cart.push(item);
        }
      });
    }).catch( (err) => {
      console.log(err);
    });
  }
  plusOne(id) {
    this.authService.cart.map((ele) => {
      if (ele.identify === id) {
          ele.quantity++;
      }
      return ele;
    });
    this.cart.map((ele) => {
      if (ele.id === id) {
        ele.quantity++;
        this.totalPrice += ele.price;
      }
      return ele;
    });
    this.calTotalPrice();
    this.localerService.saveLocalStorage('cart', JSON.stringify(this.authService.cart));
  }
  minusOne(id) {
    this.authService.cart.map((ele) => {
      if (ele.identify === id) {
          ele.quantity = ele.quantity > 1 ? ele.quantity - 1 : ele.quantity;
      }
      return ele;
    });
    this.cart.map((ele) => {
      if (ele.id === id) {
        ele.quantity = ele.quantity > 1 ? ele.quantity - 1 : ele.quantity;
      }
      return ele;
    });
    this.calTotalPrice();
    this.localerService.saveLocalStorage('cart', JSON.stringify(this.authService.cart));
  }
  changeTotalPrice(id, e) {
    e.target.value = Number(e.target.value) === 0 ? '1' : e.target.value;
    this.authService.cart.map((ele) => {
      if (ele.identify === id) {
          ele.quantity = Number(e.target.value);
      }
      return ele;
    });
    this.cart.map((ele) => {
      if (ele.id === id) {
        ele.quantity = Number(e.target.value);
      }
      return ele;
    });
    this.calTotalPrice();
    this.localerService.saveLocalStorage('cart', JSON.stringify(this.authService.cart));
  }
  calTotalPrice() {
    [this.authService.totalItemInCart, this.totalPrice] = this.cart && this.cart.length > 0 ? this.cart.reduce((ele1, ele2, i) => {
      return [ele1[0] + ele2.quantity, ele1[1] + ele2.price * ele2.quantity];
    }, [0, 0]) : [0, 0];
  }
  ngOnInit() {
  }
  removeCartItem(id, name) {
    this.modal.name = name;
    this.modal.position = id;
  }
  deleteCartItemFromModal(id) {
    this.cart = this.cart.filter(ele => {
      return ele.id !== id;
    });
    this.authService.cart = this.authService.cart.filter(ele => {
      return ele.identify !== id;
    });
    this.localerService.saveLocalStorage('cart', JSON.stringify(this.authService.cart));
    this.calTotalPrice();
  }
}

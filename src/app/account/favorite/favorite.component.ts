import { Component, OnInit, AfterViewInit, ContentChild, ViewChild } from '@angular/core';
import { ApiService } from './../../core/service/api.service';
import { LocalerService } from './../../core/service/localer.service';
import $ from 'jquery';
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { AuthService } from './../../core/service/auth.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, AfterViewInit {
  products: any;
  page = 1;
  perPage = 6;
  @ViewChild(ModalComponent) modal: ModalComponent;
  constructor(
    private apiService: ApiService,
    public authService: AuthService,
    private localerService: LocalerService,
  ) {
    apiService.getAssets('data/products.json').then( ob => {
      const likeProducts = this.authService.userLogin ?
        JSON.parse(this.localerService.getLocalStorage(this.authService.userLogin.email)) : null;
      this.products = likeProducts && ob ? ob.filter(ele => {
        return likeProducts.includes(ele.id);
      }) : this.products;
    }).catch( (err) => {
      console.log(err);
    });
  }
  deleteItemFromModal(index) {
    const likeProducts = [];
    this.products.splice(Number(index), 1);
    this.products.forEach(element => {
      likeProducts.push(element.id);
    });
    this.localerService.saveLocalStorage(this.authService.userLogin.email, JSON.stringify(likeProducts));
  }
  removeLikeProduct(index) {
    this.modal.name = this.products[Number(index)].name;
    this.modal.position = index;
  }
  addListenerRemoveLikeProduct() {
    $(document).ready(() => {
      $('.remove-like').click((e) => {
        this.removeLikeProduct(e.target.id);
      });
    });
  }
  pageChanged(page: number) {
    this.addListenerRemoveLikeProduct();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.addListenerRemoveLikeProduct();
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../core/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  imageUrls: any;
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }
  caption(name: string, routerLink: string): string {
    return `<div class="text-center banner-text font-weight-lighter">Best for ${name}!<br/>
      <ul class="menu-banner">
        <li><a href="${routerLink}" class="see-more">See more</a></li>
      </ul>
    <div>`;
  }
  ngOnInit() {
    this.imageUrls = [
      {
        url: 'http://image.gmarket.co.kr/service_image/2019/04/16/20190416131246121747_0_0.jpg',
        caption: this.caption('women', 'woman'),
      },
      {
        url: 'http://image.gmarket.co.kr/brandon/banner/2018/03/13/20180313133825447096_0_0.jpg',
        caption: this.caption('men', 'man'),
      },
      {
        url: 'http://image.gmarket.co.kr/service_image/2019/04/19/20190419161703798762_0_0.jpg',
        caption: this.caption('children', 'children'),
      }
    ];
  }
  ngAfterViewInit() {
    Array.from(document.getElementsByClassName('see-more')).forEach(element => {
      element.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.router.navigate([(e.target as HTMLElement).getAttribute('href')], { queryParams: { limit: 12} });
      });
    });
  }
}


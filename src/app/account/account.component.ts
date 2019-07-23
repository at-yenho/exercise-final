import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
  toogle() {
    if ($(window).width() <= 768) {
      $('.side-menu').toggleClass('slide-in');

    }
  }
  hiddenMenu() {
    if ($(window).width() <= 768) {
      $('.side-menu').removeClass('slide-in');

    }
  }
}

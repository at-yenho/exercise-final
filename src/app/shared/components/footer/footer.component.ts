import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isScrollTopHidden = true;
  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageYOffset > 100) {
      this.isScrollTopHidden = false;
    } else {
      this.isScrollTopHidden = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  scrollTop() {
    window.scroll(0, 0);
  }
}

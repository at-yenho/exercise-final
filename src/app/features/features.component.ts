import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

}

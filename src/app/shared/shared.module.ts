import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ModalComponent} from './components/modal/modal.component';
import {HoverDirectiveDirective} from './directive/hover-directive.directive';
import {LimitTextPipe} from './pipe/limit-text.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from '../core/service/auth.service';
@NgModule({
  declarations: [
    ModalComponent,
    HoverDirectiveDirective,
    LimitTextPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    HoverDirectiveDirective,
    LimitTextPipe,
  ],
})
export class SharedModule { }

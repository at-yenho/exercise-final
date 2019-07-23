import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { AuthService } from './core/service/auth.service';
import { ApiService } from './core/service/api.service';
import { DeactiveDialogService } from './core/service/deactive-dialog.service';
import { LocalerService } from './core/service/localer.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo.component';
import { DemoUtilsModule } from './demo-utils/demo-utils.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FeaturesComponent,
    AuthComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    FeaturesModule,
    DemoUtilsModule,
    DemoModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AuthModule,
    AppRoutingModule,
  ],
  providers: [AuthService, ApiService, DeactiveDialogService, LocalerService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

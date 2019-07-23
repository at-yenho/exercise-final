import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { FeaturesComponent } from './features/features.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { PreloadSelectModuleService } from './core/service/preload-select-module.service';
import { AuthComponent } from './auth/auth.component';
// import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'calendar',
    component: DemoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
@NgModule({
  // preload modules need for initial
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectModuleService,  useHash: true })],
  exports: [RouterModule],
  providers: [ PreloadSelectModuleService ]
})
export class AppRoutingModule { }

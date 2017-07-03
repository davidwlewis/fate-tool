import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DisplayComponent }   from './display/display.component';
import { ControlComponent }   from './control/control.component';
import { HomeComponent }   from './home.component';

const appRoutes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'control', component: ControlComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

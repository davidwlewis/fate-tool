import 'hammerjs';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule, MdIconRegistry } from '@angular/material';
//TODO: modularise display and control
import { AspectModule } from './aspects/aspect.module';
import { PcModule } from './pcs/pc.module';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent }   from './home.component';

import { PcService } from './pcs/pc.service';
import { AspectService } from './aspects/aspect.service';
import { StressService } from './pcs/stress/stress.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCgew9lTZbLp0sqfT1RNzdX5onzpUnsxpY",
  authDomain: "fate-tool.firebaseapp.com",
  databaseURL: "https://fate-tool.firebaseio.com",
  storageBucket: "fate-tool.appspot.com",
  messagingSenderId: "294982789270"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NgbModule.forRoot(),
    MaterialModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AspectModule,
    PcModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    DisplayComponent,
    ControlComponent,
    HomeComponent
  ],
  providers: [PcService, StressService, AspectService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ir: MdIconRegistry, ds: DomSanitizer) {
    ir.addSvgIcon('brain', ds.bypassSecurityTrustResourceUrl('/assets/brain.svg'));
    ir.addSvgIcon('heart', ds.bypassSecurityTrustResourceUrl('/assets/heart.svg'))
  }
}

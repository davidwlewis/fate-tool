import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UtilModule } from '../util/util.module';
import { AspectModule } from '../aspects/aspect.module';

import { PcDisplayComponent } from './pc/display.component';
import { PcListDisplayComponent } from './pc-list/display.component';
import { StressDisplayComponent } from './stress/display.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UtilModule,
    AspectModule
  ],
  declarations: [
    PcDisplayComponent,
    PcListDisplayComponent,
    StressDisplayComponent
  ],
  exports: [
    PcDisplayComponent,
    PcListDisplayComponent,
    StressDisplayComponent
  ]
})
export class PcModule { }

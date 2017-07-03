import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AspectDisplayComponent } from './aspect/display.component';
import { AspectListDisplayComponent } from './aspect-list/display.component';
import { AspectControlComponent } from './aspect/control.component';
import { AspectListControlComponent } from './aspect-list/control.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    AspectDisplayComponent,
    AspectListDisplayComponent,
    AspectControlComponent,
    AspectListControlComponent
  ],
  exports: [
    AspectDisplayComponent,
    AspectListDisplayComponent,
    AspectControlComponent,
    AspectListControlComponent
  ],
  entryComponents: [AspectControlComponent]
})
export class AspectModule { }

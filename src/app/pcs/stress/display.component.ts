import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FormGroup } from '@angular/forms';
import { MdIconRegistry } from '@angular/material';
import { Pc, PcService } from '../pc.service';

@Component({
  selector: 'stress-display',
  templateUrl: './display.component.html'
})
export class StressDisplayComponent {
  @Input() track;
  @Input() color : string;
  @Input() icon : string;

  @Output() change = new EventEmitter();
}

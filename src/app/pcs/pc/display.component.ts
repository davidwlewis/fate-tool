import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { Pc, PcService } from '../pc.service';
import { Aspect, AspectService } from '../../aspects/aspect.service';
import { StressService } from '../stress/stress.service';

@Component({
  selector: 'pc-display',
  templateUrl: './display.component.html'
})
export class PcDisplayComponent implements OnInit {
  @Input() pc : Pc;
  physicalStress: FirebaseObjectObservable<any>;
  mentalStress: FirebaseObjectObservable<any>;

  constructor(private ss: StressService) {

  }

  ngOnInit() {
    this.physicalStress = this.ss.getStress(this.pc.pstress);
    this.mentalStress = this.ss.getStress(this.pc.mstress);
  }
}

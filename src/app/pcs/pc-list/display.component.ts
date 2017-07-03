import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pc, PcService } from '../pc.service';
import { FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'pc-list-display',
  templateUrl: './display.component.html'
})
export class PcListDisplayComponent implements OnInit {
  pcs: FirebaseListObservable<Pc[]>;

  constructor(
    private ps: PcService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.pcs = this.ps.pcs;
  }
}

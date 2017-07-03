import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aspect, AspectService } from '../aspect.service';


@Component({
  selector: 'aspect-list-display',
  templateUrl: './display.component.html'
})
export class AspectListDisplayComponent implements OnInit {
  @Input() attachment: string;
  aspects: FirebaseListObservable<Aspect[]>;

  constructor(private as: AspectService) {}

  ngOnInit() {
    this.aspects = this.as.getAspectList(this.attachment);
  }

}

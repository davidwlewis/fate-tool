import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { Aspect, AspectService } from '../aspect.service';

@Component({
  selector: 'aspect-display',
  templateUrl: './display.component.html'
})
export class AspectDisplayComponent {
  @Input() aspect: Aspect;
  collapsed: boolean = true;
}

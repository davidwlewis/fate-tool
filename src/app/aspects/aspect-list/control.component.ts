import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aspect, AspectService } from '../aspect.service';
import { AspectControlComponent } from '../aspect/control.component';


@Component({
  selector: 'aspect-list-control',
  templateUrl: './control.component.html'
})
export class AspectListControlComponent implements OnInit {
  @Input() attachment: string;
  aspects: FirebaseListObservable<Aspect[]>;

  constructor(private as: AspectService, private dialog: MdDialog) {}

  ngOnInit() {
    this.aspects = this.as.getAspectList(this.attachment);
  }

  edit(aspect: Aspect) {
    let dialogRef = this.dialog.open(AspectControlComponent);
    dialogRef.componentInstance.form.patchValue(aspect);
    dialogRef.afterClosed().subscribe(result =>
      {if(result) this.aspects.update(aspect.$key, result)}
    );
  }

  add() {
    let dialogRef = this.dialog.open(AspectControlComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        result.attachment = this.attachment;
        this.aspects.push(result)
      }
    });
  }

  delete(aspect: Aspect) {
    this.aspects.remove(aspect.$key);
  }
}

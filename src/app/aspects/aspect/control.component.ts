import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MdDialogRef } from "@angular/material";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aspect, AspectService } from '../aspect.service';


@Component({
  selector: 'aspect-control',
  templateUrl: './control.component.html'
})
export class AspectControlComponent implements OnInit {
  @Output() submit = new EventEmitter();

  form : FormGroup;

  constructor(public dialogRef: MdDialogRef<AspectControlComponent>, private as: AspectService, private fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      type: [],
      description: [],
      invokes: []
    });
  }

  ngOnInit() {

  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}

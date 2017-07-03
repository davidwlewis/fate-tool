import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class StressService {
  constructor(private af: AngularFire) {}

  getStress(key: string) {
    var res = this.af.database.object('/stress/' + key);
    console.log(res);
    return res;
  }

  addStress(stress: any) {
    return firebase.database().ref('/stress').push(stress);
  }

}

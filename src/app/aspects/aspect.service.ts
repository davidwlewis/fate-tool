import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'firebase'

export class Aspect {
  constructor(
    public name: string,
    public type: string,
    public description: string,
    public invokes: number,
    public attachment: string,
    public $key?: string
  ) {}
}

@Injectable()
export class AspectService {
  constructor(private af: AngularFire) {}

  getAspect(key: string) {
    return this.af.database.object('/aspects/' + key);
  }

  addAspect(aspect: Aspect) {
    return firebase.database().ref('/aspects').push(aspect);
  }

  getAspectList(attachment: string) {
    return this.af.database.list('/aspects', {
      query: {
        orderByChild: "attachment",
        equalTo: attachment
      }
    });
  }
}

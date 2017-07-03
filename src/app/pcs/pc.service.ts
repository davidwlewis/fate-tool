import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aspect, AspectService } from '../aspects/aspect.service'

export class Pc {
  constructor(
    public name: string,
    public slug: string,
    public pstress: string,
    public mstress: string,
    public consequence_mild: Aspect,
    public consequence_moderate: Aspect,
    public consequence_severe: Aspect,
    public $key?: string
  ) {}
}

@Injectable()
export class PcService {
  pcs: FirebaseListObservable<Pc[]>;
  constructor(private af: AngularFire, aspects: AspectService) {
    this.pcs = af.database.list('/characters');
  }

  save(pc: Pc) {
    this.pcs.update(pc.$key, {"pstress": pc.pstress});
  }

  getCharacter(key: string) {
    return this.af.database.object('/characters/' + key);
  }

}

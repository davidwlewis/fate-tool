import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(map: {}, args: any[] = null): any {
    if (!map) return null;
    return Object.keys(map);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyArray'
})
export class KeyArrayPipe implements PipeTransform {



  transform(value: any, args?: any): any {

    let keys = [];
    for(let key in value){
      keys.push(key)
    }
    return keys;

  }

}

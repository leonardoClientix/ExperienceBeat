import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyArray'
})
export class KeyArrayPipe implements PipeTransform {



  transform(value: any, args?: any): any {
    console.log("hola");

    let keys = [];
    for(let key in value){
      console.log(value);
      keys.push(key)
    }
    return keys;

  }

}

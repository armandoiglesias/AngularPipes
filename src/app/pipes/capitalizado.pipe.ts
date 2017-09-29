import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value:string, args: any[]):string {

    value = value.toLowerCase();
    value = value.replace(/(\W)/g, 'p');

    return value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (args && value.length > args) {
      return value.slice(0, args) + '...';
    }
    return value;
  }

}

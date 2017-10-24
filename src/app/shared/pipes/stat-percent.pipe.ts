import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statPercent'
})
export class StatPercentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + "%";
  }

}

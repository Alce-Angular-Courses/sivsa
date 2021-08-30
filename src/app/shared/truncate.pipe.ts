import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, long: number): string {
    if (long > 0) {
      if(long < value.length) {
        return value.slice(0, long-3)+'...'
      }
    }
    return value;
  }

}

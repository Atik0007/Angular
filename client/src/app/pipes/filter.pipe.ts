import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: string[], args: string) {
    if (!args) {
      return values;
    }
    let result: string[] = [];

    for (const value of values) {
      if (value.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result = [...result, value];
      }
    }
    return result;
  }
}

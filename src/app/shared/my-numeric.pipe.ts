import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumeric'
})
export class MyNumericPipe implements PipeTransform {

  constructor() { }

  transform(value: number | string, decimalPlaces: number = 0): string {

    if (value) {

      value = parseFloat(value.toString());

      let numStr = value.toFixed(0);

      if (decimalPlaces > 0) {
        numStr = value.toFixed(decimalPlaces);
      }

      const numText = Number(numStr).toLocaleString();

      return numText;
    }

    // if (returnZero === true) {
    //   return Number(0).toFixed(2);
    // }

    return '';
  }

  parse(value: string, decimalPlaces: number = 0): string {

    if (value && value.length > 0) {

      // normalize number string and remove all unnecessary characters
      value = value.replace(/[^-.0-9]/g, '');

      const num = parseFloat(value);

      return num.toFixed(decimalPlaces);
    }

    // if (returnZero === true) {
    //   return Number(0).toFixed(decimalPlaces);
    // }

    return undefined;
  }
}

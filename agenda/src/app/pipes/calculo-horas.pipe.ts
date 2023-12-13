import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculoHoras'
})
export class CalculoHorasPipe implements PipeTransform {

  transform(value: string): number {
    // Tratamiento de mi valor -> value
    return 0
  }

}

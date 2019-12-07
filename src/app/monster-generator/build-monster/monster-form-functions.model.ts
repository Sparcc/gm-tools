import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'modifier'})
export class ModifierPipe implements PipeTransform {
  transform(value) {
    switch (Math.sign(parseInt(value))){
      case -1:
        return '-'+value.toString();
      case 1:
        return '+'+value.toString();
      default:
        return value;
    }

  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMinMax'
})
export class FilterMinMaxPipe implements PipeTransform {
  
  transform(obj:any):any {

    return obj.filter(el => el.weight >= 5);
    
  }

}
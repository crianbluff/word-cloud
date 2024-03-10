import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMinMax'
})
export class FilterMinMaxPipe implements PipeTransform {
  
  transform(obj:any):any {
    
    if (obj)
    // Filter is greater than 5 and then order from minor to greater
    return obj.filter(el => el.weight >= 5).sort((a, b) => a.weight - b.weight);
  }

}
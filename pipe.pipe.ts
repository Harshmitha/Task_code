import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerEmailFilter'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!args){
    return value;
  }
  return value.filter((val) => {
    let rVal = (val.MovieName.toLocaleLowerCase().includes(args)) || (val.Language.toLocaleLowerCase().includes(args))
    || (val.Genre.toLocaleLowerCase().includes(args));
    return rVal;
  })
}
}
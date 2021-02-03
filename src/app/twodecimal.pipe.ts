import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twodecimal'
})
export class TwodecimalPipe implements PipeTransform {

  transform(vote:number): any {
    let voteNew:any=vote.toFixed(1);
    return voteNew;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from './search.service';

@Pipe({
  name: 'realTimeSearch'
})
export class RealTimeSearchPipe implements PipeTransform {
constructor(private _SearchService:SearchService){}
  transform(movies:any[]):any {
      this._SearchService.change.subscribe(()=>{
     if(movies!=undefined && this._SearchService.change.getValue()){
                for (let i = 0; i < movies.length; i++) {
                  if(movies[i].title.includes(this._SearchService.change.getValue())){
                    return movies[i]
                  }else{
                      return movies}
                  
                } 
                
     }
      })
  }
}

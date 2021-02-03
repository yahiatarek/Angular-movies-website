import { Component, OnDestroy } from '@angular/core';
import{MoviesServiceService}from '../movies-service.service'
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnDestroy {
popularTv:any
API:any
isTvLoaded=true
imgURL="https://image.tmdb.org/t/p/w500/"
constructor(_MoviesServiceService:MoviesServiceService) {
    this.API=_MoviesServiceService.getMovies('popular','tv').subscribe((data)=>{
      this.popularTv=data.results
      this.isTvLoaded=false
    })
   }

  ngOnDestroy (): void {
    this.API.unsubscribe()
  }

}

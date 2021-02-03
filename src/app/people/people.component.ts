import { Component, OnDestroy } from '@angular/core';
import{MoviesServiceService}from '../movies-service.service'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnDestroy {
Allpersons:any
API:any
isPersonLoaded=true
imgURL="https://image.tmdb.org/t/p/w500/"
  constructor(_MoviesServiceService:MoviesServiceService) { 
this.API=_MoviesServiceService.getMovies("popular",'person').subscribe((data)=>{
  this.Allpersons=data.results
  this.isPersonLoaded=false
})
  }

  ngOnDestroy(): void {
  this.API.unsubscribe()
  }

}

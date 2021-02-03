import { Component, OnDestroy } from '@angular/core';
import { observable } from 'rxjs';
import{MoviesServiceService}from'../movies-service.service'
import { RegisterServiceService } from '../register-service.service';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnDestroy {
  imgURL="https://image.tmdb.org/t/p/w500/"
  Popular:any
  TopRated:any
  upcoming:any
  API1:any
  API2:any
  API3:any
  isTrueLoading1=true
  isTrueLoading2=true
  isTrueLoading3=true
  constructor(private _SearchService:SearchService, public _MoviesServiceService:MoviesServiceService,private _RegisterServiceService:RegisterServiceService) { 
    this.API1=_MoviesServiceService.getMovies('popular','movie').subscribe((data)=>{
    this.Popular=data.results.slice(1,5)  
    
    this.isTrueLoading1=false
    })
    this.API2=_MoviesServiceService.getMovies('top_rated','movie').subscribe((data)=>{
      this.TopRated=data.results.slice(1,5) 
    this.isTrueLoading2=false
      })
      this.API3=_MoviesServiceService.getMovies('upcoming','movie').subscribe((data)=>{
     this.upcoming=data.results.slice(1,5)  
    this.isTrueLoading3=false
        })
        
        
        
  }
  


  ngOnDestroy (): void {
    this.API1.unsubscribe()
    this.API2.unsubscribe()
    this.API3.unsubscribe()
  }
}

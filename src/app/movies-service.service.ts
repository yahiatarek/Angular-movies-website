import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  constructor(public _HttpClient:HttpClient,private _Router:Router) { }
  getMovies(mediaType:string,pageType:string):Observable<any>{
  return this._HttpClient.get(` https://api.themoviedb.org/3/${pageType}/${mediaType}?api_key=52bbcddeda849047525b51d6f8a12361&language=en-`)
  }
getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(` https://api.themoviedb.org/3/movie/${id}?api_key=52bbcddeda849047525b51d6f8a12361&language=en-US`)
    
}
  
 
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
movie:any
imgURL="https://image.tmdb.org/t/p/w500/"
movieDetails:any
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesServiceService:MoviesServiceService) {  
    this.movie=this._ActivatedRoute.snapshot.params.id
    this._MoviesServiceService.getMovieDetails(this.movie).subscribe((data)=>{
      this.movieDetails=data
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }

}

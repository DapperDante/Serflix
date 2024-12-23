import { Component, inject } from '@angular/core';
import { ItemMoviesService } from '../../service/item-movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieInfo } from '../../api/movie-info.api';
import { Movies } from '../../api/movies.api';
import { ScoreMoviesService } from '../../service/score-movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FavoriteMoviesService } from '../../service/favorite-movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styles: `
    ::ng-deep .stars-review .p-rating .p-rating-item .p-rating-icon.p-icon{
      height: 3rem !important;
      width: 3rem !important;
    }
    ::ng-deep .stars-main .p-rating .p-rating-item .p-rating-icon.p-icon{
      height: 5rem !important;
      width: 5rem !important;
      color: yellow;
    }
    ::ng-deep .stars-review .p-rating .p-rating-item.p-rating-item-active .p-rating-icon{
      color: yellow;
    }
  `
})
export class MovieInfoComponent {
  private _movies = inject(ItemMoviesService);
  private _reviews = inject(ScoreMoviesService);
  private _favoriteMovies = inject(FavoriteMoviesService);
  ratingForm = new FormGroup({
    rating: new FormControl(0, Validators.required),
    review: new FormControl('',[Validators.required, Validators.minLength(15)])
  })
  movie$!: Observable<MovieInfo>;
  similar$!: Observable<Movies>;
  recommendation$!: Observable<Movies>;
  review$!: Observable<any>;
  isFavorite!: boolean;
  idDoc!: number;
  //It's only variables for button's animate
  loadingReview: boolean = false;
  loadingFavorite: boolean = false;
  idProfile!: number;
  idMovie!: number;
  constructor(private routerCurrent: ActivatedRoute, private router: Router, private message: MessageService){}
  ngOnInit(){
    this.idProfile = Number(localStorage.getItem('idProfile'));
    this.routerCurrent.paramMap.subscribe((routerCurrent)=>{
      this.idMovie = Number(routerCurrent.get('id'));
      this.movie$ = this._movies.getMovieById(this.idMovie)
      .pipe(map((movie)=>{
        this.similar$ = new Observable((suscriber)=>{
          suscriber.next(movie.similar);
        });
        this.recommendation$ = new Observable((suscriber)=>{
          suscriber.next(movie.recommendations);
        });
        this.review$ = this._reviews.getReviewsOfMovie(movie.id);
        this._favoriteMovies.isMovieFavorite(this.idProfile, this.idMovie).subscribe((value)=>{
          if(value.id){
            this.idDoc = value.id;
            this.isFavorite = true;
          }
        })
        return movie;
      }))
    })
  }
  ChangeMovie(idMovie: number){
    this.router.navigate(['../', idMovie], {relativeTo: this.routerCurrent, replaceUrl: true});
  }
  SendReview(){
    if(this.ratingForm.invalid){
      this.message.add({severity: 'warn', detail: 'Add some words'});
      return;
    }
    this.loadingReview = true;
    this._reviews.addNewReview(Number(localStorage.getItem('idProfile')), this.idMovie, this.ratingForm.value.rating!, this.ratingForm.value.review!)
    .subscribe({
      complete: ()=>{
        this.loadingReview = false;
        this.message.add({severity: 'success', detail: 'Review added'});
        this.review$ = this._reviews.getReviewsOfMovie(this.idMovie);
      }
    })
  }
  addFavoriteMovie(){
    this.loadingFavorite = true;
    this._favoriteMovies.AddMovieFavorite(this.idProfile, this.idMovie)
    .subscribe({
      next: (value)=>{
        this.idDoc = value.id
      },
      complete: ()=>{
        this.loadingFavorite = false;
        this.isFavorite = true;
        this.message.add({severity: 'success', detail: 'Movie added to favorites'});
      },
      error: ()=>{
        this.loadingFavorite = false;
        this.message.add({severity: 'error', detail: 'Has an ocurred problem'});
      }
    })
  }
  deleteFavoriteMovie(){
    this.loadingFavorite = true;
    this._favoriteMovies.deleteFavoriteMovie(this.idDoc).subscribe({
      complete: ()=>{
        this.loadingFavorite = false;
        this.isFavorite = false;
        this.message.add({severity: 'success', detail: 'movie delete to favorites'});
      },
      error: ()=>{
        this.loadingFavorite = false;
        this.message.add({severity: 'error', detail: 'Has an ocurred problem'});
      }
    })
  }
}

import { Component, inject } from '@angular/core';
import { ItemMoviesService } from '../../service/item-movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MovieInfo } from '../../api/movie-info.api';
import { Movies } from '../../api/movies.api';
import { ScoreMoviesService } from '../../service/score-movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FavoriteMoviesService } from '../../service/favorite-movies.service';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

@Component({
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	standalone: false,
	styles: `
		:host ::ng-deep .p-dataview-content{
			border-radius: 0.3rem;
			min-height: 10vh;
		}
		:host ::ng-deep .p-dataview-emptymessage{
			text-align: center;
			font-size: 2rem;
		}
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
		.background{
			mask-image: linear-gradient(black 80%, transparent);
		}
		.background > img{
			filter: brightness(0.4);
			z-index: -1;
		}
  `
})
export class MovieInfoComponent {
	private readonly _movies = inject(ItemMoviesService);
	private readonly _reviews = inject(ScoreMoviesService);
	private readonly _favoriteMovies = inject(FavoriteMoviesService);
	private readonly _error = inject(ErrorHandlingService);
	ratingForm = new FormGroup({
		rating: new FormControl(0, Validators.required),
		review: new FormControl('', [Validators.required, Validators.minLength(15)]),
	});
	movie$!: Observable<MovieInfo>;
	similar$!: Observable<Movies>;
	recommendation$!: Observable<Movies>;
	review$!: Observable<any>;
	isFavorite: boolean = false;
	idDoc!: number;
	idMovie!: number;
	//It's only variables for button's animate when it's loading
	loadingReview: boolean = false;
	loadingFavorite: boolean = false;
	constructor(private routerCurrent: ActivatedRoute, private router: Router) {}
	ngOnInit() {
		this.routerCurrent.paramMap.subscribe((routerCurrent) => {
			this.idMovie = Number(routerCurrent.get('id'));
			this.movie$ = this._movies.getMovieById(this.idMovie).pipe(
				tap((movie) => {
					this.similar$ = new Observable((suscriber) => {
						suscriber.next(movie.similar);
					});
					this.recommendation$ = new Observable((suscriber) => {
						suscriber.next(movie.recommendations);
					});
					this.review$ = this._reviews.getReviewsOfMovie(movie.id);
					this._favoriteMovies.getMovieProfile(this.idMovie).subscribe({
						next: (value) => {
							if (Object.keys(value.results).length) {
								this.idDoc = value.id;
								this.isFavorite = true;
							}
						},
					});
				})
			);
		});
	}
	ChangeMovie(idMovie: number) {
		this.router.navigate(['../', idMovie], {
			relativeTo: this.routerCurrent,
			replaceUrl: true
		});
	}
	SendReview() {
		if (this.ratingForm.invalid) {
			this._error.ShowError('Invalid form');
			return;
		}
		this.loadingReview = true;
		this._reviews
		.addNewReview(this.idMovie, this.ratingForm.value.rating!, this.ratingForm.value.review!)
		.subscribe({
			error: () => {
				this.loadingReview = false;
			},
			complete: () => {
				this.loadingReview = false;
				this.review$ = this._reviews.getReviewsOfMovie(this.idMovie);
			},
		});
	}
	addFavoriteMovie() {
		this.loadingFavorite = true;
		this._favoriteMovies.addMovie(this.idMovie).subscribe({
			next: (value) => {
				this.idDoc = value.id;
			},
			complete: () => {
				this.loadingFavorite = false;
				this.isFavorite = true;
			},
			error: () => {
				this.loadingFavorite = false;
			},
		});
	}
	deleteFavoriteMovie() {
		this.loadingFavorite = true;
		this._favoriteMovies.deteleMovie(this.idDoc).subscribe({
			complete: () => {
				this.loadingFavorite = false;
				this.isFavorite = false;
			},
			error: () => {
				this.loadingFavorite = false;
			},
		});
	}
}

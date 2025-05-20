import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ScoreMoviesService } from '../../service/score-movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FavoriteMoviesService } from '../../service/favorite-movies.service';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { MovieBasic, MovieRequest, MovieScore } from 'src/app/interface/movies.interface';
import { Title } from '@angular/platform-browser';
import { slideInFwd } from 'src/app/animation/animation';

@Component({
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	standalone: false,
	animations: [
		slideInFwd('0.5s')
	],
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
      height: 4rem !important;
      width: 4rem !important;
      color: yellow;
    }
    ::ng-deep .stars-review .p-rating .p-rating-item.p-rating-item-active .p-rating-icon{
      color: yellow;
    }
		::ng-deep .p-skeleton{
			height: auto;
		}
		.main{
			min-height: 60vh;
		}
		.background{
			mask-image: linear-gradient(black 80%, transparent);
		}
		.background > img{
			filter: brightness(0.4);
			z-index: -1;
			object-fit: cover;
		}
  `
})
export class MovieInfoComponent {
	private readonly _reviews = inject(ScoreMoviesService);
	private readonly _favoriteMovies = inject(FavoriteMoviesService);
	private readonly _error = inject(ErrorHandlingService);
	ratingForm = new FormGroup({
		rating: new FormControl(0, Validators.required),
		review: new FormControl('', [Validators.required, Validators.minLength(15)]),
	});
	movie$!: Observable<MovieRequest>;
	similar$!: Observable<MovieBasic[]>;
	recommendation$!: Observable<MovieBasic[]>;
	review$!: Observable<MovieScore>;
	idMovie!: number;
	isFavorite: boolean = false;
	//variables for button's animate when loading
	loadingReview: boolean = false;
	loadingFavorite: boolean = false;
	constructor(private routerCurrent: ActivatedRoute, private router: Router, private title: Title) {}
	ngOnInit() {
		this.routerCurrent.paramMap.subscribe((routerCurrent) => {
			this.idMovie = Number(routerCurrent.get('id'));
			this.movie$ = this._favoriteMovies.getMovieByProfile(this.idMovie).pipe(
				tap((movie) => {
					const {result} = movie;
					this.title.setTitle(`${result.title} | Serflix`);
					this.similar$ = new Observable((suscriber) => {
						suscriber.next(result.similar?.results);
					});
					this.recommendation$ = new Observable((suscriber) => {
						suscriber.next(result.recommendations?.results);
					});
					this.review$ = this._reviews.getReviewsOfMovie(movie.result.id);
					this.isFavorite = movie.is_favorite;
				})
			);
		});
	}
	ChangeMovie(item: {id: number, type: string}) {
		this.router.navigate(['../', item.id], {
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
		this._favoriteMovies.deteleMovie(this.idMovie).subscribe({
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

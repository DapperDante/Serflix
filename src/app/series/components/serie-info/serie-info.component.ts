import { Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { ScoreSeriesService } from '../../service/score-series.service';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { SerieInfo } from '../../api/serie-info.api';
import { Series } from '../../api/series';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

@Component({
	selector: 'app-serie-info',
	templateUrl: './serie-info.component.html',
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
  `,
})
export class SerieInfoComponent {
	private readonly _series = inject(ItemSeriesService);
	private readonly _reviews = inject(ScoreSeriesService);
	private readonly _favoriteSeries = inject(FavoriteSeriesService);
	private readonly _error = inject(ErrorHandlingService);
	ratingForm = new FormGroup({
		rating: new FormControl(0, Validators.required),
		review: new FormControl('', [Validators.required, Validators.minLength(15)]),
	});
	serie$!: Observable<SerieInfo>;
	similar$!: Observable<Series>;
	recommendation$!: Observable<Series>;
	review$!: Observable<any>;
	isFavorite!: boolean;
	idDoc!: number;
	idSerie!: number;
	//It's only variables for button's animate
	loadingReview: boolean = false;
	loadingFavorite: boolean = false;
	constructor(private routerCurrent: ActivatedRoute, private router: Router) {}
	ngOnInit() {
		this.routerCurrent.paramMap.subscribe((routerCurrent) => {
			this.idSerie = Number(routerCurrent.get('id'));
			this.serie$ = this._series.getSerieById(this.idSerie).pipe(
				tap((serie) => {
					this.similar$ = new Observable((suscriber) => {
						suscriber.next(serie.similar);
					});
					this.recommendation$ = new Observable((suscriber) => {
						suscriber.next(serie.recommendations);
					});
					this.review$ = this._reviews.getReviewsOfSerie(serie.id);
					this._favoriteSeries.getSerieProfile(this.idSerie).subscribe({
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
	ChangeSerie(idSerie: number) {
		this.router.navigate(['../', idSerie], {
			relativeTo: this.routerCurrent,
			replaceUrl: true,
		});
	}
	SendReview() {
		if (this.ratingForm.invalid) {
			this._error.ShowError('Invalid form');
			return;
		}
		this.loadingReview = true;
		console.log(this.ratingForm.value);
		this._reviews.addNewReview(this.idSerie, this.ratingForm.value.rating!, this.ratingForm.value.review!).subscribe({
			error: () => {
				this.loadingReview = false;
			},
			complete: () => {
				this.loadingReview = false;
				this.review$ = this._reviews.getReviewsOfSerie(this.idSerie);
			},
		});
	}
	addFavoriteSerie() {
		this.loadingFavorite = true;
		this._favoriteSeries.addSerie(this.idSerie).subscribe({
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
	deleteFavoriteSerie() {
		this.loadingFavorite = true;
		this._favoriteSeries.deleteSerie(this.idDoc).subscribe({
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

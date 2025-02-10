import { Component, inject } from '@angular/core';
import { ScoreSeriesService } from '../../service/score-series.service';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { SerieBasic, SerieRequest } from 'src/app/interface/series.interface';

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
      height: 4rem !important;
      width: 4rem !important;
      color: yellow;
    }
    ::ng-deep .stars-review .p-rating .p-rating-item.p-rating-item-active .p-rating-icon{
      color: yellow;
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
		}
  `,
})
export class SerieInfoComponent {
	private readonly _reviews = inject(ScoreSeriesService);
	private readonly _favoriteSeries = inject(FavoriteSeriesService);
	private readonly _error = inject(ErrorHandlingService);
	ratingForm = new FormGroup({
		rating: new FormControl(0, Validators.required),
		review: new FormControl('', [Validators.required, Validators.minLength(15)]),
	});
	serie$!: Observable<SerieRequest>;
	similar$!: Observable<SerieBasic[]>;
	recommendation$!: Observable<SerieBasic[]>;
	review$!: Observable<any>;
	isFavorite!: boolean;
	idSerie!: number;
	//It's only variables for button's animate
	loadingReview: boolean = false;
	loadingFavorite: boolean = false;
	constructor(private routerCurrent: ActivatedRoute, private router: Router) {}
	ngOnInit() {
		this.routerCurrent.paramMap.subscribe((routerCurrent) => {
			this.idSerie = Number(routerCurrent.get('id'));
			this.serie$ = this._favoriteSeries.getSerieByProfile(this.idSerie)
			.pipe(
				tap((serie) => {
					this.similar$ = new Observable((suscriber) => {
						suscriber.next(serie.result.similar?.results);
					});
					this.recommendation$ = new Observable((suscriber) => {
						suscriber.next(serie.result.recommendations?.results);
					});
					this.review$ = this._reviews.getReviewsOfSerie(serie.result.id);
					this.isFavorite = serie.is_favorite;
				})
			);
		});
	}
	ChangeSerie(item: {id: number, type: string}) {
		this.router.navigate(['../', item.id], {
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
		this._favoriteSeries.deleteSerie(this.idSerie).subscribe({
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

import { Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { ScoreSeriesService } from '../../service/score-series.service';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { SerieInfo } from '../../api/serie-info.api';
import { Series } from '../../api/series';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-serie-info',
	templateUrl: './serie-info.component.html',
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
		.background{
			filter: brightness(0.4);
			mask-image: linear-gradient(black 80%, transparent);
			z-index: -1;
		}
  `,
})
export class SerieInfoComponent {
	private readonly _series = inject(ItemSeriesService);
	private readonly _reviews = inject(ScoreSeriesService);
	private readonly _favoriteSeries = inject(FavoriteSeriesService);
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
	//It's only variables for button's animate
	loadingReview: boolean = false;
	loadingFavorite: boolean = false;
	idSerie!: number;
	constructor(private routerCurrent: ActivatedRoute, private router: Router, private message: MessageService) {}
	ngOnInit() {
		this.routerCurrent.paramMap.subscribe((routerCurrent) => {
			this.idSerie = Number(routerCurrent.get('id'));
			this.serie$ = this._series.getSerieById(this.idSerie).pipe(
				map((serie) => {
					this.similar$ = new Observable((suscriber) => {
						suscriber.next(serie.similar);
					});
					this.recommendation$ = new Observable((suscriber) => {
						suscriber.next(serie.recommendations);
					});
					this.review$ = this._reviews.getReviewsOfMovie(serie.id);
					this._favoriteSeries.getSerieProfile(this.idSerie).subscribe((value) => {
						if (value.id) {
							this.idDoc = value.id;
							this.isFavorite = true;
						}
					});
					return serie;
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
			this.message.add({ severity: 'warn', detail: 'Add some words' });
			return;
		}
		this.loadingReview = true;
		this._reviews
			.addNewReview(this.idSerie, this.ratingForm.value.rating!, this.ratingForm.value.review!)
			.subscribe({
				error: () => {
					this.loadingReview = false;
					this.message.add({ severity: 'error', detail: 'There was a problem' });
				},
				complete: () => {
					this.loadingReview = false;
					this.message.add({ severity: 'success', detail: 'Review added' });
					this.review$ = this._reviews.getReviewsOfMovie(this.idSerie);
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
				this.message.add({
					severity: 'success',
					detail: 'Serie added to favorites',
				});
			},
			error: () => {
				this.loadingFavorite = false;
				this.message.add({
					severity: 'error',
					detail: 'Has an ocurred problem',
				});
			},
		});
	}
	deleteFavoriteSerie() {
		this.loadingFavorite = true;
		this._favoriteSeries.deleteSerie(this.idDoc).subscribe({
			complete: () => {
				this.loadingFavorite = false;
				this.isFavorite = false;
				this.message.add({
					severity: 'success',
					detail: 'movie delete to favorites',
				});
			},
			error: () => {
				this.loadingFavorite = false;
				this.message.add({
					severity: 'error',
					detail: 'Has an ocurred problem',
				});
			},
		});
	}
}

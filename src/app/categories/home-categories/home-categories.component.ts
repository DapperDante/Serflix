import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { ItemMoviesService } from 'src/app/movies/service/item-movies.service';
import { ItemSeriesService } from 'src/app/series/service/item-series.service';

interface DataValid {
	name: string;
	id: number;
	idSeries: number | undefined;
	idMovies: number;
}

@Component({
	selector: 'app-home-categories',
	templateUrl: './home-categories.component.html',
	styles: ``,
})
export class HomeCategoriesComponent {
	private dataValid: DataValid[] = [
		{
			name: 'Adventure',
			id: 1,
			idSeries: 10759,
			idMovies: 12,
		},
		{
			name: 'Comedy',
			id: 2,
			idSeries: 16,
			idMovies: 35,
		},
		{
			name: 'Horror',
			id: 3,
			idSeries: undefined,
			idMovies: 27,
		},
		{
			name: 'Animation',
			id: 4,
			idSeries: 16,
			idMovies: 16,
		},
	];
	private readonly _movies = inject(ItemMoviesService);
	private readonly _series = inject(ItemSeriesService);
	items$!: Observable<any>;
	totalItemsToPaginator: number = 0;
	itemsForShowToPaginator: number = 20;
	controlStatePaginator: number = 0;
	indexPage: number = 1;
	categoryCurrent?: DataValid;
	constructor(private _router: Router, private _activeRoute: ActivatedRoute) {}
	ngOnInit(): void {
		this._activeRoute.params.subscribe((params) => {
			this.categoryCurrent = this.dataValid.find((data) => data.id == params['id']);
			if (!this.categoryCurrent) this._router.navigate(['/home']);
			this.UpdateRequest(1);
		});
	}
	ChangePage(event: any) {
		this.indexPage = event.page! + 1;
		this.controlStatePaginator = event.first!;
		this.UpdateRequest(this.indexPage);
	}
	UpdateRequest(page: number) {
		this.items$ = forkJoin([
			this._movies.getMoviesByGenre(this.categoryCurrent?.idMovies + '', page),
			this._series.getSeriesByGenre(this.categoryCurrent?.idSeries + '', page),
		]).pipe(
			map(([movies, series]) => {
				return {
					results: [...movies.results, ...series.results],
					total_pages: Math.max(movies.total_pages, series.total_pages),
					total_results: movies.total_results + series.total_results,
				};
			}),
			tap((data) => {
				if (data.total_pages > 500)
					this.totalItemsToPaginator = 500 * 20;
				else
					this.totalItemsToPaginator = data.total_pages * 20;
			})
		);
	}
}

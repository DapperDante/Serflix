import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { ItemMoviesService } from '../../movies/service/item-movies.service';
import { ItemSeriesService } from '../../series/service/item-series.service';

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
			name: 'adventure',
			id: 1,
			idSeries: 10759,
			idMovies: 12,
		},
		{
			name: 'comedy',
			id: 2,
			idSeries: 16,
			idMovies: 35,
		},
		{
			name: 'horror',
			id: 3,
			idSeries: undefined,
			idMovies: 27,
		},
		{
			name: 'animation',
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
		this._activeRoute.queryParams.subscribe((params)=>{
			if(!params['name']){
				this._router.navigate(['']);
			}
			if(!params['page']){
				this._router.navigate([], {
					queryParams: {
						page: 1
					},
					queryParamsHandling: 'merge',
					relativeTo: this._activeRoute
				});
			}else{
				this.categoryCurrent = this.dataValid.find((data) => data.name == params['name']);
				if (!this.categoryCurrent) this._router.navigate(['']);
				this.UpdateRequest(params['page']);
			}
		})
	}
	SelectedItem(item: {id: number, type: string}){
		if(item.type == 'movie')
			this._router.navigate(['home','access','movie', item.id]);
		else
			this._router.navigate(['home','access','serie', item.id]);
	}
	ChangePage(event: any) {
		this.indexPage = event.page! + 1;
		this.controlStatePaginator = event.first!;
		this._router.navigate([], {
			queryParams: {
				page: this.indexPage,
			},
			queryParamsHandling: 'merge',
			relativeTo: this._activeRoute,
		});
	}
	UpdateRequest(page: number) {
		this.items$ = forkJoin([
			this._movies.getMoviesByGenre(this.categoryCurrent?.idMovies + '', page),
			this._series.getSeriesByGenre(this.categoryCurrent?.idSeries + '', page),
		]).pipe(
			map(([movies, series]) => {
				movies.results.map((movie: any) => {
					movie.type = 'movie';
				});
				series.results.map((serie: any) => {
					serie.type = 'serie';
				});
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

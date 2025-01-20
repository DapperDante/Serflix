import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemMoviesService } from 'src/app/movies/service/item-movies.service';
import { map, Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';
import { Series } from 'src/app/series/api/series';
import { ItemSeriesService } from 'src/app/series/service/item-series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
@Component({
	selector: 'app-home-access',
	templateUrl: './home-access.component.html',
	styles: `
		.main-image{
			mask-image: linear-gradient(to right, black 80%, transparent)
		}
		.categories:hover{
			opacity: 0.5;
			transition-duration: 400ms;
			cursor: pointer;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAccessComponent {
	private readonly _movies = inject(ItemMoviesService);
	private readonly _series = inject(ItemSeriesService);
	private readonly _profile = inject(ProfileService);
	mainEntertaiment$!: Observable<Movies>;
	moviesData$!: Observable<Movies>;
	profile$!: Observable<any>;
	serieData$!: Observable<Series>;
	itemsToShowMain = 4;
	constructor(private router: Router, private routerCurrent: ActivatedRoute) {}
	ngOnInit() {
		this.moviesData$ = this._movies.getMoviesPopular();
		this.serieData$ = this._series.getSeriesPopular();
		this.mainEntertaiment$ = this._movies.getMoviesTopReated().pipe(
			map((data) => {
				data.results = data.results.slice(0, this.itemsToShowMain);
				return data;
			})
		);
		this.profile$ = this._profile.getProfile();
	}
	ngAfterViewInit(){
		this._profile.refreshProfile();
	}
	SelectedMovie(idMovie: number) {
		this.router.navigate(['movie', idMovie], { relativeTo: this.routerCurrent });
	}
	SelectedSerie(idSerie: number) {
		this.router.navigate(['serie', idSerie], { relativeTo: this.routerCurrent });
	}
	SelectedFavorite(data: {id: number, type: string}) {
		if(data.type === 'movie'){
			return this.SelectedMovie(data.id);
		}
		this.SelectedSerie(data.id)
	}
	SelectedCategory(idCategory: number | string) {
		this.router.navigate(['categories', idCategory], { relativeTo: this.routerCurrent });
	}
}

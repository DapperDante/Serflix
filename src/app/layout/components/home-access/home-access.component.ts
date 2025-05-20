import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MovieBasic, MovieInfo } from 'src/app/interface/movies.interface';
import { SerieBasic, SerieInfo } from 'src/app/interface/series.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { RecommendationService } from '../../service/recommendation.service';
import { slideInFwd } from 'src/app/animation/animation';
@Component({
	selector: 'app-home-access',
	templateUrl: './home-access.component.html',
	animations: [slideInFwd('2s')],
	styles: `
		.main-image{
			mask-image: linear-gradient(to right, black 70%, transparent)
		}
		.categories:hover{
			opacity: 0.5;
			transition-duration: 400ms;
			cursor: pointer;
		}
		@media (max-width: 576px) {
			.text-backdrop{
				padding: 1.5rem;
				background: linear-gradient(135deg, rgba(0,0,0,1) 38%, transparent 100%);
				mask-image: linear-gradient(to right, black 90%, transparent),
										linear-gradient(to bottom, black 90%, transparent);
				mask-composite: intersect;
        -webkit-mask-composite: source-in;
			}
		}
	`,
})
export class HomeAccessComponent implements OnInit{
	private readonly _profile = inject(ProfileService);
	private readonly _recommendation = inject(RecommendationService);
	mainItems$!: Observable<(MovieBasic | SerieBasic)[]>;
	showLastViewed = false;
	favorites$!: Observable<any>;
	recLastView$!: Observable<MovieBasic[] | SerieBasic[]>;
	recs$: Observable<MovieBasic[] | SerieBasic[]>[] = [];
	nameOfLastViewedItem?: string;
	itemsToShowMain = 4;
	constructor(private _router: Router, private _routerCurrent: ActivatedRoute) {}
	ngOnInit() {
		this._profile.refreshProfile();
		this._recommendation.getRecommendations().subscribe((res) => {
			this.mainItems$ = of(res.results.slice(0, this.itemsToShowMain));
		});
		this._recommendation.getRecommendationsByProfile().subscribe((res) => {
			const { last_viewed, recommendations } = res;
			if (last_viewed) {
				this.showLastViewed = true;
				this.nameOfLastViewedItem = `Because you watched ${last_viewed.original_name || last_viewed.original_title}`;
			}
			this.recLastView$ = of(last_viewed?.recommendations?.results ? last_viewed?.recommendations?.results : []);
			recommendations.forEach((rec) => {
				this.recs$.push(of(rec.results));
			});
		});
		this.favorites$ = this._profile.getProfile$().pipe(map(res=>res?.results));
	}
	SelectedMain(item: MovieInfo | SerieInfo) {
		if ('original_name' in item) {
			this.NavigateToSerie(item.id);
			return;
		}
		this.NavigateToMovie(item.id);
	}
	SelectedItem(item: { id: number; type: string }) {
		if (item.type === 'Serie') {
			this.NavigateToSerie(item.id);
			return;
		}
		this.NavigateToMovie(item.id);
	}
	NavigateToMovie(idMovie: number) {
		this._router.navigate(['movie', idMovie], { relativeTo: this._routerCurrent });
	}
	NavigateToSerie(idSerie: number) {
		this._router.navigate(['serie', idSerie], { relativeTo: this._routerCurrent });
	}
	SelectedCategory(name: string) {
		this._router.navigate(['categories'], { queryParams: {name}, relativeTo: this._routerCurrent });
	}
}

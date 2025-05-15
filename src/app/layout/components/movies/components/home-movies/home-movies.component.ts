import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemMoviesService } from '../../service/item-movies.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ManyMovies } from 'src/app/interface/movies.interface';
import { PageEvent } from 'src/app/layout/api/api-config';
@Component({
	selector: 'app-home-movies',
	templateUrl: './home-movies.component.html'
})
export class HomeMoviesComponent implements OnInit {
	private readonly _movies = inject(ItemMoviesService);
	movies$!: Observable<ManyMovies>;
	//It's for control of what show to user about types of movies
	indexSection!: number;
	//Those variables is for get control through the paginator
	indexPage?: number;
	totalMovies!: number;
	//How many movies will show for page
	numberOfMoviesForShow: number = 20;
	controlStatePaginator: number = 4;
	//Variable to tabmenu
	items: MenuItem[] = [
		{ label: 'Popular', command: () => this.changeSection(1) },
		{ label: 'Now playing', command: () => this.changeSection(2) },
		{ label: 'Top reated', command: () => this.changeSection(3) },
		{ label: 'Upcoming', command: () => this.changeSection(4) }
	];
	activeItem!: MenuItem;
	constructor(private router: Router, private activeRoute: ActivatedRoute) {}
	ngOnInit() {
		this.activeRoute.queryParams.subscribe((params) => {
			if (!params['page'] || !params['header']) {
				this.router.navigate([], {
					queryParams: {
						page: 1,
						header: 1,
					},
					queryParamsHandling: 'merge',
					relativeTo: this.activeRoute,
				});
			} else {
				this.indexSection = Number(params['header']);
				this.indexPage = Number(params['page']);
				this.activeItem = this.items[this.indexSection - 1];
				this.controlStatePaginator = (this.indexPage-1) * this.numberOfMoviesForShow;
				this.updateRequest(this.indexSection, this.indexPage);
			}
		});
	}
	changeSection(index: number) {
		if (this.indexSection == index)
			return;
		this.router.navigate([], {
			queryParams: {
				page: this.indexPage,
				header: index,
			},
			queryParamsHandling: 'merge',
			relativeTo: this.activeRoute,
		});
	}
	changePage(event: PageEvent) {
		this.indexPage = event.page! + 1;
		this.controlStatePaginator = event.first!;
		this.router.navigate([], {
			queryParams: {
				page: this.indexPage,
				header: this.indexSection,
			},
			queryParamsHandling: 'merge',
			relativeTo: this.activeRoute,
		});
	}
	selectedMovie(idMovie: number) {
		this.router.navigate([idMovie], { relativeTo: this.activeRoute });
	}
	//For give control when update data of movies
	private updateRequest(indexSection: number, page: number = 1) {
		switch (indexSection) {
			case 1:
				this.movies$ = this._movies.getMoviesPopular(page).pipe(
					map((movies) => {
						if (movies.total_pages > 500) this.totalMovies = 500 * 20;
						else this.totalMovies = movies.total_results;
						return movies;
					})
				);
				break;
			case 2:
				this.movies$ = this._movies.getMoviesNowPlaying(page).pipe(
					map((movies) => {
						if (movies.total_pages > 500) this.totalMovies = 500 * 20;
						else this.totalMovies = movies.total_results;
						return movies;
					})
				);
				break;
			case 3:
				this.movies$ = this._movies.getMoviesTopReated(page).pipe(
					map((movies) => {
						if (movies.total_pages > 500) this.totalMovies = 500 * 20;
						else this.totalMovies = movies.total_results;
						return movies;
					})
				);
				break;
			case 4:
				this.movies$ = this._movies.getMoviesUpcoming(page).pipe(
					map((movies) => {
						if (movies.total_pages > 500) this.totalMovies = 500 * 20;
						else this.totalMovies = movies.total_results;
						return movies;
					})
				);
				break;
		}
	}
}

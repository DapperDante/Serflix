import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	private readonly _search = inject(SearchService);
	movies$!: Observable<Movies>;
	constructor(private currentRoute: ActivatedRoute, private router: Router) {}
	ngOnInit() {
		this.currentRoute.queryParams.subscribe((params) => {
			const { query } = params;
			if (!query) this.router.navigate(['../'], { relativeTo: this.currentRoute });
			this.movies$ = this._search.getItemsByQuery(query, 1, 1);
		});
	}
	Selected(obj: { id: number; type: string }) {
		if (obj.type === 'movie') {
			this.router.navigate(['../', 'movie', obj.id], { relativeTo: this.currentRoute });
			return;
		}
		this.router.navigate(['../', 'serie', obj.id], { relativeTo: this.currentRoute });
	}
}

import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManyMovies } from 'src/app/interface/movies.interface';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	private readonly _search = inject(SearchService);
	movies$!: Observable<ManyMovies>;
	times = 1;
	manyItemsRelation = 1;
	constructor(private currentRoute: ActivatedRoute, private router: Router) {}
	ngOnInit() {
		this.currentRoute.queryParams.subscribe((params) => {
			const { query } = params;
			if (!query) this.router.navigate(['../'], { relativeTo: this.currentRoute });
			this.movies$ = this._search.getItemsByQuery(query, this.times, this.manyItemsRelation);
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

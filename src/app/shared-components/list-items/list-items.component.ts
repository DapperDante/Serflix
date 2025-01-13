import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInfo } from 'src/app/layout/api/account.api';
import { MoviesInfo } from 'src/app/movies/api/movie-info.api';
import { Movies } from 'src/app/movies/api/movies.api';
import { SeriesInfo } from 'src/app/series/api/serie-info.api';
import { Series } from 'src/app/series/api/series';

@Component({
	selector: 'app-list-items',
	templateUrl: './list-items.component.html',
	styles: `
		:host ::ng-deep .p-carousel-items-content .p-carousel-item {
			flex: 0 0 12.5% !important;
		}
	`,
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(-20px)' }),
				animate('1s', style({ opacity: 1, transform: 'translateY(0)' })),
			]),
		]),
	],
})
export class ListItemsComponent {
	items = input.required<Observable<Movies | Series | MoviesInfo | SeriesInfo | ProfileInfo>>();
	title = input.required<String>();
	getId = output<number>();
	getIdAndType = output<{ id: number; type: string }>();
	EmitId(id: number, type?: string) {
		if (type) {
			return this.getIdAndType.emit({ id, type });
		}
		this.getId.emit(id);
	}
}

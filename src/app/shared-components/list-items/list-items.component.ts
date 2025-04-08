import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieInfo } from 'src/app/interface/movies.interface';
import { SerieInfo } from 'src/app/interface/series.interface';

@Component({
	selector: 'app-list-items',
	templateUrl: './list-items.component.html',
	standalone: false,
	styles: `
		.item:hover{
			filter: brightness(0.4);
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
	items = input.required<Observable<MovieInfo[] | SerieInfo[]>>();
	title = input<String>();
	getIdAndType = output<{ id: number; type: string }>();
	responsiveOptions?: any[];
	console = console
	ngOnInit(){
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 4,
				numScroll: 1
			},
			{
				breakpoint: '576px',
				numVisible: 1,
				numScroll: 1
			}
		]
	}
	EmitId(item: MovieInfo | SerieInfo) {
		if ('original_title' in item) {
			return this.getIdAndType.emit({ id: item.id, type: 'Movie'});
		}
		this.getIdAndType.emit({ id: item.id, type: 'Serie'});
	}
}

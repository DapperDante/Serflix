import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { slideInFwd, slideInFwdStagger } from 'src/app/animation/animation';
import { MovieInfo } from 'src/app/interface/movies.interface';
import { SerieInfo } from 'src/app/interface/series.interface';

@Component({
	selector: 'app-list-items',
	templateUrl: './list-items.component.html',
	styles: `
		.item:hover{
			filter: brightness(0.4);
		}
	`,
	animations: [
		slideInFwd('0.5s'),
		slideInFwdStagger('2s', '0.2s')
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemsComponent {
	styleClass = input<String>();
	priority = input<boolean>(false);
	items = input.required<Observable<MovieInfo[] | SerieInfo[]>>();
	title = input<String>();
	titleEmpy = input<String>();
	getIdAndType = output<{ id: number; type: string }>();
	responsiveOptions?: any[];
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

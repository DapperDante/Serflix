import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { ManyMovies } from 'src/app/interface/movies.interface';
import { ManySeries } from 'src/app/interface/series.interface';
import { PageEvent } from 'src/app/layout/api/api-config';

@Component({
	selector: 'app-panel-items',
	templateUrl: './panel-items.component.html',
	standalone: false,
	styles: `
    ::ng-deep .card-custom .p-card-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
		::ng-deep .p-skeleton{
			margin: auto;
		}
    .select-item:hover{
      transform: scale(1.05);
    }
  `,
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(-20px)' }),
				animate('1s', style({ opacity: 1, transform: 'translateY(0)' })),
			])
		])
	]
})
export class PanelItemsComponent {
	//Variables to tabmenu
	menuItems = input<MenuItem[]>();
	activeItem = input<MenuItem>();
	//Variable to control the items
	items = input.required<Observable<ManyMovies | ManySeries | any>>();
	title = input.required<String>();
	getId = output<number>();
	getIdAndType = output<{ id: number; type: string }>();
	//Variable to control the paginator
	showPaginator = input<boolean>();
	totalItemsToPaginator = input<number>();
	controlStatePaginator = input<number>();
	itemsForShowToPaginator = input<number>();
	getIndexPaginator = output<PageEvent>();
	EmitId(id: number, type?: string) {
		if(type){
			this.getIdAndType.emit({id, type});
			return;
		}
		this.getId.emit(id);
	}
}

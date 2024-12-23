import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';
import { Series } from 'src/app/series/api/series';

@Component({
  selector: 'app-panel-items',
  templateUrl: './panel-items.component.html',
  animations: [
      trigger('showItems', [
        transition(':enter', [
          style({opacity: 0,}),
          animate(2500, style({opacity: 1}))
        ])
      ])
    ]
})
export class PanelItemsComponent {
  items = input.required<Observable<Movies | Series | any>>();
  title = input.required<String>();
  getId = output<number>();

}

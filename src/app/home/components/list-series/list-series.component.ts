import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from 'src/app/series/api/series';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html'
})
export class ListSeriesComponent {
  series = input.required<Observable<Series>>();
  title = input.required<String>();
}

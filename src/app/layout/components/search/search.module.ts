import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search.component';
import { SearchMoviesRoutingModule } from './search-routing.module';
import { SearchService } from './search.service';
import { PanelItemsModule } from '../panel-items/panel-items.module';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		SearchMoviesRoutingModule,
		PanelItemsModule
	],
	providers: [SearchService],
})
export class SearchMoviesModule {}

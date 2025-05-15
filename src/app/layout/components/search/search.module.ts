import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search.component';
import { SearchMoviesRoutingModule } from './search-routing.module';
import { SearchMoviesInterceptor, SearchService } from './search.service';
import { PanelItemsModule } from '../panel-items/panel-items.module';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		SearchMoviesRoutingModule,
		PanelItemsModule
	],
	providers: [
		provideHttpClient(
			withInterceptorsFromDi(),
			withInterceptors([
				SearchMoviesInterceptor
			])
		),
		SearchService
	],
})
export class SearchMoviesModule {}

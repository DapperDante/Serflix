import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search.component';
import { SearchMoviesRoutingModule } from './search-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { SearchService } from './search.service';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		CommonModule,
		SearchMoviesRoutingModule,
		SharedComponentsModule
	],
	providers: [SearchService],
})
export class SearchMoviesModule {}

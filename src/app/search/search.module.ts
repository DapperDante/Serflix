import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SearchComponent } from './components/search.component';
import { SearchMoviesRoutingModule } from './search-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { SearchService } from './search.service';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		CommonModule,
		SearchMoviesRoutingModule,
		InputIconModule,
		IconFieldModule,
		InputTextModule,
		DropdownModule,
		ReactiveFormsModule,
		ButtonModule,
		SharedComponentsModule,
		NgOptimizedImage,
	],
	providers: [SearchService],
})
export class SearchMoviesModule {}

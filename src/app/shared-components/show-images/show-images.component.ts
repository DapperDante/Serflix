import { Component, EventEmitter, Input, input, Output, output, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyCharacters } from 'src/app/layout/api/account.api';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styles: ``
})
export class ShowImagesComponent {
	title = input.required<string>();
	@Input({required: true}) isActive: boolean = false;
	@Output() isActiveChange = new EventEmitter<boolean>();
 	images$ = input.required<Observable<RickAndMortyCharacters>>();
	getImage = output<string>();
	onValueChange(newValue: boolean){
		this.isActiveChange.emit(newValue);
	}
}

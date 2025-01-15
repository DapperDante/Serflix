import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SuccessHandlingService {

  constructor(private _message: MessageService) {
		console.log(`Service ${this.constructor.name} is working`);
	}
	showSuccessMessage(message: string){
		this._message.add({severity:'success', summary:'Success', detail:message});
	}
}

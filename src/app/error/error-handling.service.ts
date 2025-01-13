import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
	private isError = false;
	constructor(private _message: MessageService) {
		console.log(`Service ${this.constructor.name} is ready`);
	}
	public ShowError(message: string){
		this._message.add({severity:'error', summary:'Error', detail:message});
	}
  public getIsError() {
		return this.isError;
	}
	public setIsError(value: boolean) {
		this.isError = value;
	}
}

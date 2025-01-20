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
		this._message.add({severity:'success', summary:'Success', detail:message, closable: false});
	}
	showAddItemMessage(message: string){
		this._message.add({severity:'socondary', summary:'Added', detail:message, icon: 'pi pi-star', styleClass: 'bg-green-400 text-green-900', closable: false});
	}
	showGoalMessage(goal: {id: number, name: string, detail: string, url: string}){
		this._message.add({severity:'secondary', summary:goal.name, detail: goal.detail, icon: 'pi pi-trophy', styleClass: 'bg-yellow-400 text-yellow-900', closable: false});
	}
	showDeleteItemMessage(message: string){
		this._message.add({severity:'secondary', summary:'Deleted', detail:message, icon: 'pi pi-trash', styleClass: 'bg-red-400 text-black-alpha-90', closable: false});
	}
}

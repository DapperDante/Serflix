import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorService implements ErrorHandler {
	handleError(error: any): void {
		console.error(error);
	}
}

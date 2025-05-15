import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Service{
	showError(error: Error):void;
	errorHandler(error: HttpErrorResponse): Observable<never>;
}

import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Service{
	ShowError(error: Error):void;
	ErrorHandler(error: HttpErrorResponse): Observable<never>;
}

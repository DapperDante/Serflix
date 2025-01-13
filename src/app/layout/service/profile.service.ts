import { inject, Injectable } from '@angular/core';
import { ProfileInfo, Profiles, RickAndMortyCharacters } from '../api/account.api';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { AuthService } from 'src/app/home/service/auth.service';

const PATH = environment.ApiDbProfiles;
const PATH_IMG = environment.ApiPhotos;

@Injectable({
	providedIn: 'root',
})
export class ProfileService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _auth = inject(AuthService);
	private readonly _error = inject(ErrorHandlingService);
	// this is more useful when you want to get the profile without making other or repeat requests
	private profile$: BehaviorSubject<ProfileInfo | undefined>;
	constructor() {
		console.log(`Service ${this.constructor.name} is ready`);
		this.profile$ = new BehaviorSubject<ProfileInfo | undefined>(undefined);
	}
	addProfile(img: string, name: string): Observable<{ msg: string; id: number }> {
		const profile = { name, img };
		return this._http
			.post<{ msg: string; id: number }>(`${PATH}/add`, profile)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
	}
	//First, you must use accessProfile when you want to access a profile, after that you can use getProfile$ to get the profile
	LogInProfile(idProfile: number | string): Observable<{ msg: string; token: string }> {
		return this._http
			.post<{ msg: string; token: string }>(`${PATH}/log-in`, { idProfile })
			.pipe(
				catchError(this.ErrorHandler),
				tap({ next: (access) => this._auth.setToken(access.token), error: (error) => this.ShowError(error) })
			);
	}
	LogOutProfile(): Observable<{ msg: string; token: string }> {
		return this._http.get<{ msg: string; token: string }>(`${PATH}/log-out`).pipe(
			catchError(this.ErrorHandler),
			tap({
				next: (access) => this._auth.setToken(access.token),
				error: (error) => this.ShowError(error),
			})
		);
	}
	getProfiles(): Observable<Profiles> {
		return this._http.get<Profiles>(`${PATH}/get-all`).pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error) => this.ShowError(error),
			})
		);
	}
	// if you work with constant changes in the profile, you can use this method to get the update profile, after use getProfile$ to get the update profile
	refreshProfile() {
		this._http
			.get<ProfileInfo>(`${PATH}/get`)
			.pipe(
				map((profile: ProfileInfo) => {
					const BASE_IMG = environment.ApiTmdbImage;
					profile.results.map((result) => {
						result.poster_path = `${BASE_IMG}${result.poster_path}`;
						return result;
					});
					return profile;
				}),
				catchError(this.ErrorHandler),
				tap({ error: (error) => this.ShowError(error) })
			)
			.subscribe((profile) => this.profile$?.next(profile));
	}
	getProfile$(): BehaviorSubject<ProfileInfo | undefined> {
		return this.profile$!;
	}
	getPhotos(): Observable<RickAndMortyCharacters> {
		return this._http
			.get<RickAndMortyCharacters>(`${PATH_IMG}/character`)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
	}
	updateProfile(name?: string, img?: string): Observable<void> {
		const profile = { name, img };
		return this._http
			.put<void>(`${PATH}/put`, profile)
			.pipe(catchError(this.ErrorHandler), tap({ error: this.ShowError }));
	}
	isSelectedProfile(): boolean {
		return sessionStorage.getItem('isSelectedProfile') ? true : false;
	}
	setSelectedProfile(value: boolean): void {
		if (!value) {
			console.log('remove');
			sessionStorage.removeItem('isSelectedProfile');
			return;
		}
		sessionStorage.setItem('isSelectedProfile', 'true');
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			case 401:
				message = 'Unauthorized';
				break;
			default:
				message = 'Server disconnected';
		}
		return throwError(() => new Error(message));
	}
}

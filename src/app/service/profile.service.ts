import { inject, Injectable } from '@angular/core';
import { Profile, ProfileInfo, RickAndMortyCharacters } from '../interface/account.interface';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { AuthService } from 'src/app/service/auth.service';
import { SuccessHandlingService } from './success-handling.service';
import { TokenRequest } from '../interface/backend.interface';

const PATH = environment.API_BACKEND_PROFILE;
const PATH_IMG_PROFILE = environment.API_IMAGES_PROFILE;

@Injectable({
	providedIn: 'platform',
})
export class ProfileService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _auth = inject(AuthService);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _sucessful = inject(SuccessHandlingService);
	// In this way is to get info about profile is more useful without repeat requests
	private profile$: BehaviorSubject<ProfileInfo | undefined>;
	constructor() {
		this.profile$ = new BehaviorSubject<ProfileInfo | undefined>(undefined);
	}
	addProfile(img: string, name: string): Observable<TokenRequest> {
		const profile = { name, img };
		return this._http
			.post<TokenRequest>(`${PATH}/add`, profile)
			.pipe(
				catchError(this.errorHandler),
				tap({
					next: (res) =>{
						this._auth.token = res.token;
						this.selectedProfile = true;
						this._sucessful.showSuccessMessage('Profile created successfully');
					},
					error: (error) => this.showError(error)
				}));
	}
	//First, you must use accessProfile when you want to access a profile, after you can use getProfile$ to get the profile
	loginProfile(idProfile: number | string, password: string | null): Observable<TokenRequest> {
		return this._http.post<TokenRequest>(`${PATH}/log-in`, { idProfile, password }).pipe(
			catchError(this.errorHandler),
			tap({
				next: (access) => {
					this._auth.token = access.token;
					this.selectedProfile = true;
					this._sucessful.showSuccessMessage('Profile logged in successfully');
				},
				error: (error) => this.showError(error),
			})
		);
	}
	getProfiles(): Observable<{ results: Profile[] }> {
		return this._http.get<{ results: Profile[] }>(`${PATH}/get-all`).pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => this.showError(error),
			})
		);
	}
	/*
		if you work with constant changes in the profile,
		use this method to get the update profile, after use getProfile$ to get the update profile
	*/
	refreshProfile() {
		this._http
			.get<ProfileInfo>(`${PATH}/get`)
			.pipe(
				map((profile) => {
					const BASE_IMG = environment.API_TMDB_IMAGE_REDUX;
					profile.results.map((result) => {
						result.poster_path = `${BASE_IMG}${result.poster_path}`;
						return result;
					});
					// profile.plan = this._auth.getPlan(profile.plan.id);
					profile.plan = this._auth.plans.find((plan) => plan.id === profile.plan.id)!;
					return profile;
				}),
				catchError(this.errorHandler),
				tap({ error: (error) => this.showError(error) })
			)
			.subscribe((profile) => this.profile$?.next(profile));
	}
	getProfile$(): BehaviorSubject<ProfileInfo | undefined> {
		return this.profile$!;
	}
	getPhotos(): Observable<RickAndMortyCharacters> {
		return this._http
			.get<RickAndMortyCharacters>(`${PATH_IMG_PROFILE}/character`)
			.pipe(catchError(this.errorHandler), tap({ error: (error) => this.showError(error) }));
	}
	updateProfile(name?: string, img?: string): Observable<void> {
		const profile = { name, img };
		return this._http.put<void>(`${PATH}/put`, profile).pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => this.showError(error),
				next: () => this._sucessful.showSuccessMessage('Profile updated successfully'),
			})
		);
	}
	addPasswordProfile(password: string): Observable<void> {
		return this._http.post<void>(`${PATH}/add-password`, { password })
		.pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => this.showError(error),
				next: () => this._sucessful.showSuccessMessage('Password added successfully'),
			})
		);
	}
	updatePasswordProfile(password: string): Observable<void>{
		return this._http.put<void>(`${PATH}/update-password`, { password })
		.pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => this.showError(error),
				next: () => this._sucessful.showSuccessMessage('Password updated successfully'),
			})
		);
	}
	deletePasswordProfile(): Observable<void> {
		return this._http.delete<void>(`${PATH}/delete-password`)
		.pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => this.showError(error),
				next: () => this._sucessful.showSuccessMessage('Password deleted successfully'),
			})
		);
	}
	get selectedProfile(): boolean {
		return sessionStorage.getItem('isSelectedProfile') ? true : false;
	}
	set selectedProfile(value: boolean) {
		if (!value) {
			sessionStorage.removeItem('isSelectedProfile');
			return;
		}
		sessionStorage.setItem('isSelectedProfile', 'true');
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		return throwError(() => new Error(error.error.msg));
	}
}

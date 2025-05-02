import { Component, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProfileService } from 'src/app/service/profile.service';
import { ProfileInfo, ProfileItem, RickAndMortyCharacters } from 'src/app/interface/account.interface';
import { expandHeight, slideInFwd, slideInFwdStagger } from 'src/app/animation/animation';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	standalone: false,
	animations: [
		slideInFwdStagger('2s','0.7s'),
		slideInFwd('0.7s'),
		expandHeight('0.3s')
	],
	styles: `
		.image-profile:hover{
			transition-duration: 0.4s;
			filter: brightness(0.4);
		}
	`
})
export class ProfileComponent {
	private readonly _profile = inject(ProfileService);
	profile$!: Observable<ProfileInfo | undefined>;
	photos$!: Observable<RickAndMortyCharacters>;
	loadingUpdateName: boolean = false;
	loadingNewPassword: boolean = false;
	loadingDeletePassword: boolean = false;
	loadingUpdatePassword: boolean = false;
	dataChartFavorite: any;
	dataChartOptions: any;
	newName = '';
	selectPhotoProfile: boolean = false;
	showAddPassword: boolean = false;
	isTherePassword?: boolean;
	newPasswordModel = '';
	updatePasswordModel = '';
	constructor() {}
	ngOnInit() {
		this.profile$ = this._profile.getProfile$().asObservable()
		.pipe(
			tap(profile=>{
				if(profile?.results.length){
					let countItemMovies = profile.results.filter((item: ProfileItem)=> item.type === 'movie').length;
					let countItemSeries = profile.results.filter((item: ProfileItem)=> item.type === 'serie').length;
					this.configGraphic(countItemMovies, countItemSeries);
				}
				this.isTherePassword = profile?.password!;
			})
		);

	}
	private configGraphic(countItemMovies: number, countItemSeries: number) {
		this.dataChartFavorite = {
			labels: ['Movies', 'Series'],
			datasets: [{
				data: [countItemMovies, countItemSeries],
				backgroundColor: ['#ff3333', '#3385ff']
			}]
		}
		this.dataChartOptions = {
			maintainAspectRatio: true,
			plugins: {
				legend: {
					display: false
				}
			},
			elements: {
				arc: {
					borderWidth: 0
				}
			},
			animations:{
				duration: 1500,
				easing: 'linear'
			}
		}
	}
	changePhotoProfile() {
		this.selectPhotoProfile = true;
		this.photos$ = this._profile.getPhotos();
	}
	updateImg(newImage: string){
		if(!newImage){
			this._profile.showError(new Error('You must select a photo'));
			return;
		}
		this.selectPhotoProfile = false;
		this._profile.updateProfile('', newImage).subscribe({
			next: ()=> {
				this._profile.refreshProfile();
				this
			}
		});
	}
	updateName(){
		if(!this.newName){
			this._profile.showError(new Error('You must write a name'));
			return;
		}
		this._profile.updateProfile(this.newName).subscribe({
			next: ()=>{
				this._profile.refreshProfile();
				this.newName = '';
			}
		});
	}
	addPassword(): boolean{
		if(!this.newPasswordModel){
			this._profile.showError(new Error('You must write a password'));
			return false;
		}
		this.loadingNewPassword = true;
		this._profile.addPasswordProfile(this.newPasswordModel)
		.subscribe({
			error: ()=>{
				this.loadingNewPassword = false;
			},
			complete: ()=>{
				this.loadingNewPassword = false;
				this.isTherePassword = true;
				this.newPasswordModel = '';
			}
		});
		return true;
	}
	updatePassword(): boolean{
		if(!this.updatePasswordModel){
			this._profile.showError(new Error('You must write a password'));
			return false;
		}
		this.loadingUpdatePassword = true;
		this._profile.updatePasswordProfile(this.updatePasswordModel).subscribe({
			error: ()=>{
				this.loadingUpdatePassword = false;
			},
			complete: ()=>{
				this.loadingUpdatePassword = false;
				this.updatePasswordModel = '';
			}
		});
		return true;
	}
	deletePassword(){
		this.loadingDeletePassword = true;
		this._profile.deletePasswordProfile().subscribe({
			error: ()=>{
				this.loadingDeletePassword = false;
			},
			complete: ()=>{
				this.loadingDeletePassword = false;
				this.isTherePassword = false;
			}
		});
		return true;
	}
}

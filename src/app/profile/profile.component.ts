import { Component, inject } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { ProfileInfo, ProfileItem, RickAndMortyCharacters } from '../layout/api/account.api';
import { Observable, tap } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { SuccessHandlingService } from '../service/success-handling.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styles: `
		.icon-image, .icon-image + img{
			transition: 0.3s;
		}
		.icon-image:hover{
			opacity: 1 !important;
		}
		.icon-image:hover + img{
			filter: brightness(0.4);
		}
	`,
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(-20px)' }),
				animate('1s', style({ opacity: 1, transform: 'translateY(0)' }))
			])
		])
	]
})
export class ProfileComponent {
	private readonly _profile = inject(ProfileService);
	private readonly _success = inject(SuccessHandlingService);
	profile$!: Observable<ProfileInfo | undefined>;
	photos$!: Observable<RickAndMortyCharacters>;
	loading: boolean = false;
	controlGoals: boolean[] = [false, false, false, false, false];
	dataChartFavorite: any;
	dataChartOptions: any;
	selectPhotoProfile: boolean = false;
	formUpdate = new FormGroup({
		newName: new FormControl('')
	});
	constructor() {}
	ngOnInit() {
		this._profile.refreshProfile();
			this.profile$ = this._profile.getProfile().asObservable()
			.pipe(
				tap(profile=>{
					if(!profile) return;
					//This code line is temporary
					profile.goals.forEach(value=>{
						switch(value) {
							case 1:
								this.controlGoals[1] = true;
							break;
							case 2:
								this.controlGoals[2] = true;
								break;
							case 3:
								this.controlGoals[3] = true;
							break;
							case 4:
								this.controlGoals[0] = true;
							break;
						}
					});
					if(profile.results.length){
						let countItemMovies = profile.results.filter((item: ProfileItem)=> item.type === 'movie').length;
						let countItemSeries = profile.results.filter((item: ProfileItem)=> item.type === 'serie').length;
						this.configGraphic(countItemMovies, countItemSeries);
					}
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
			mantainAspectRatio: false,
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
			aniamtions:{
				duration: 1500,
				easing: 'linear'
			}
		}
	}
	ChangePhotoProfile() {
		this.selectPhotoProfile = true;
		this.photos$ = this._profile.getPhotos();
	}
	UpdateImg(newImage: string){
		if(!newImage){
			this._profile.ShowError(new Error('You must select a photo'));
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
	UpdateName(){
		const {newName} = this.formUpdate.value;
		if(!newName){
			this._profile.ShowError(new Error('You must write a name'));
			return;
		}
		this._profile.updateProfile(newName).subscribe({
			next: ()=>{
				this._profile.refreshProfile();
				this._success.showSuccessMessage('Name updated successfully');
			}
		});
	}
}

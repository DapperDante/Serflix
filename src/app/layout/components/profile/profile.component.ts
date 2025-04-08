import { Component, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProfileService } from 'src/app/service/profile.service';
import { ProfileInfo, ProfileItem, RickAndMortyCharacters } from 'src/app/interface/account.interface';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	standalone: false,
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
		.front-main{
			height: 40vh;
		}
		@media (max-width: 576px){
			.front-main{
				height: 90vh;
			}
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
	profile$!: Observable<ProfileInfo | undefined>;
	photos$!: Observable<RickAndMortyCharacters>;
	loading: boolean = false;
	dataChartFavorite: any;
	dataChartOptions: any;
	newName = '';
	selectPhotoProfile: boolean = false;
	constructor() {}
	ngOnInit() {
		this._profile.refreshProfile();
			this.profile$ = this._profile.getProfile$().asObservable()
			.pipe(
				tap(profile=>{
					if(!profile) return;
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
	UpdateName(){
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
}

import { Component, inject } from '@angular/core';
import { ProfileService } from '../layout/service/profile.service';
import { RickAndMortyCharacters } from '../layout/api/account.api';
import { map, Observable, tap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styles: ``,
})
export class ProfileComponent {
	private _profile = inject(ProfileService);
	profile$!: Observable<any>;
	photos$!: Observable<RickAndMortyCharacters>;
	idProfile!: number;
	idUser!: number;
	dataChartFavorite: any;
	dataChartOptions: any;
	selectPhotoProfile: boolean = false;
	constructor(private message: MessageService) {}
	ngOnInit() {
		this.idProfile = Number(localStorage.getItem('idProfile'));
		this.idUser = Number(localStorage.getItem('idUser'));
		this.profile$ = this._profile.getProfile(this.idUser, this.idProfile)
		.pipe(
			map(profile=>{
				if(profile.movies.length){
					this.dataChartFavorite = {
						labels: ['Movies', 'Series'],
						datasets: [{
							data: [profile.movies.length, profile.series.length],
							backgroundColor: ['#ff3333', '#3385ff']
						}]
					}
					this.dataChartOptions = {
						mantainAspectRatio: false,
						plugins: {
							legend: {
								position: 'left'
							}
						},
						elements: {
							arc: {
								borderWidth: 0
							}
						}
					}
				}
				return profile;
			}),
			tap(console.log)
		)
	}
	ChangePhotoProfile() {
		this.selectPhotoProfile = true;
		this.photos$ = this._profile.getAllPhotosForProfile();
	}
}

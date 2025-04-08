import { Component, inject } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { Profile, RickAndMortyCharacters } from '../interface/account.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
	selector: 'app-select-profile',
	templateUrl: './select-profile.component.html',
	standalone: false,
	styles: `
	.select-profile:hover{
		filter: brightness(0.6);
	}
	`,
})
export class SelectProfileComponent {
	private readonly _auth = inject(AuthService);
	private readonly _profile = inject(ProfileService);
	profiles$!: Observable<{results: Profile[]}>;
	photos$!: Observable<RickAndMortyCharacters>;
	//Control view panel of edit
	addProfile: boolean = false;
	selectPhotoProfile: boolean = false;
	//Variables for new profile
	newPhotoProfile?: string;
	newNameProfile?: string;
	isFirstTime: boolean = false;
	constructor(private _router: Router, private _confirmationService: ConfirmationService) {}
	ngOnInit() {
		this.isFirstTime = this._auth.firstTime;
		this.profiles$ = this._profile.getProfiles();
	}
	selectProfile(id: string | number) {
		this._profile.loginProfile(id).subscribe(() => {
			this._profile.selectedProfile = true;
			this._router.navigate(['home']);
		});
	}
	viewPhotosForProfile() {
		this.selectPhotoProfile = true;
		//Avoid repeat the request when get all photos for view
		if (this.photos$) return;
		this.photos$ = this._profile.getPhotos();
	}
	//It's for change the photo when you choose one of them for new profile
	changePhotoProfile(url: string) {
		this.newPhotoProfile = url;
		this.selectPhotoProfile = false;
	}
	createProfile() {
		if(!this.newNameProfile) {
			this._profile.showError(new Error('You must write a name'));
			return;
		};
		this._confirmationService.confirm({
			message: 'Are you sure that you want to created?',
			header: 'Confirmation',
			icon: 'pi pi-info-circle',
			acceptIcon: 'none',
			rejectIcon: 'none',
			rejectButtonStyleClass: 'p-button-text',
			accept: () => {
				this.creatingProfile();
			},
		});
	}
	//It's when send info to backend
	private creatingProfile() {
		if (!(this.newPhotoProfile && this.newNameProfile)) {
			this._profile.showError(new Error('You must select a photo and write a name'));
			return;
		}
		this._profile.addProfile(this.newPhotoProfile, this.newNameProfile)
		.subscribe({
			next: (value) => {
				this._auth.token = value.token;
				this._profile.selectedProfile = true;
				this._router.navigate(['/home']);
			},
		});
	}
}

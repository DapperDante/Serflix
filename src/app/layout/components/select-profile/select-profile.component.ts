import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../service/profile.service';
import { RickAndMortyCharacters } from '../../api/account.api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-select-profile',
	templateUrl: './select-profile.component.html',
	styles: `
    .select-profile:hover{
      transition-duration: 200ms;
      transform: scale(1.1);
      box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);
    }
  `,
})
export class SelectprofileComponent {
	private readonly _profile = inject(ProfileService);
	profiles$!: Observable<any>;
	photos$!: Observable<RickAndMortyCharacters>;
	//Control view panel of edit
	addProfile: boolean = false;
	selectPhotoProfile: boolean = false;
	//Variables for new profile
	urlProfileSelected!: string;
	formProfileSelected = new FormGroup({
		nameProfile: new FormControl('', [Validators.required, Validators.minLength(2)])
	})
	nameProfileSelected!: string;
	constructor(private _router: Router, private _confirmationService: ConfirmationService) {}
	ngOnInit() {
		this.profiles$ = this._profile.getProfiles();
	}
	SelectProfile(id: string) {
		this._profile.LogInProfile(id).subscribe(() => {
			this._profile.setSelectedProfile(true);
			this._router.navigate(['home']);
		});
	}
	ViewPhotosForProfile() {
		this.selectPhotoProfile = true;
		//Avoid repeat the request when get all photos for view
		if (this.photos$) return;
		this.photos$ = this._profile.getPhotos();
	}
	//It's for change the photo when you choose one of them for new profile
	ChangePhotoProfile(url: string) {
		this.urlProfileSelected = url;
		this.selectPhotoProfile = false;
	}
	CreateProfile() {
		this._confirmationService.confirm({
			message: 'Are you sure that you want to created?',
			header: 'Confirmation',
			icon: 'pi pi-info-circle',
			acceptIcon: 'none',
			rejectIcon: 'none',
			rejectButtonStyleClass: 'p-button-text',
			accept: () => {
				this.CreatingProfile();
			},
		});
	}
	//It's when send info to backend
	private CreatingProfile() {
		if (!this.urlProfileSelected || !this.nameProfileSelected) {
			this._profile.ShowError(new Error('You must select a photo and write a name'));
			return;
		}
		this._profile.addProfile(this.urlProfileSelected, this.nameProfileSelected).subscribe({
			next: (value) => {
				this.SelectProfile(value.id + '');
			},
		});
	}
}

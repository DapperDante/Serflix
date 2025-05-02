import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';
import { Profile, RickAndMortyCharacters } from 'src/app/interface/account.interface';
import { slideInFwd, slideInFwdStagger } from 'src/app/animation/animation';

@Component({
	selector: 'app-select-profile',
	templateUrl: './select-profile.component.html',
	animations: [
		slideInFwdStagger('0.5s', '0.5s'),
		slideInFwd('1s')
	],
	styles: `
	.select-profile:hover{
		transition: 0.3s;
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
	showEnterPassword: boolean = false;
	passwordProfile?: string;
	auxProfileData?: {id: string | number, password: string | null};
	constructor(private _route: ActivatedRoute, private _router: Router, private _confirmationService: ConfirmationService) {}
	ngOnInit() {
		this.isFirstTime = this._auth.firstTime;
		this.profiles$ = this._profile.getProfiles();
	}
	selectProfile(id: string | number, password: string | null) {
		if(!this.showEnterPassword && password){
			this.showEnterPassword = true;
			this.auxProfileData = {id, password};
			return;
		}
		this._profile.loginProfile(id, password)
		.subscribe(() => {
			this._router.navigate(['access'], {relativeTo: this._route});
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
		.subscribe(()=>{
			this._router.navigate(['home/access']);
		});
	}
	accessProfilePassword(){
		this._profile.loginProfile(this.auxProfileData?.id!, this.passwordProfile!)
		.subscribe({
			next: ()=>{
				this._router.navigate(['access'], {relativeTo: this._route});
			}
		});
	}
}

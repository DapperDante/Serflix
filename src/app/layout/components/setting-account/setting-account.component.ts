import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { slideInFwd } from 'src/app/animation/animation';
import { ProfileInfo } from 'src/app/interface/account.interface';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-setting-account',
  templateUrl: './setting-account.component.html',
	animations: [
		slideInFwd('0.5s')
	]
})
export class SettingAccountComponent {
	private readonly _auth = inject(AuthService);
	private readonly _profile = inject(ProfileService);
	profile$!: Observable<ProfileInfo | undefined>;
	loadingChangePassword: boolean = false;
	loadingChangeUsername: boolean = false;
	ChangePasswordForm = new FormGroup({
		currentPassword: new FormControl('', Validators.required),
		newPassword: new FormControl('', Validators.required)
	})
	ChangeUsernameForm = new FormGroup({
		newUsername: new FormControl('', Validators.required),
		repeatUsername: new FormControl('', Validators.required)
	})
	ngOnInit(){
		this._profile.refreshProfile();
		this.profile$ = this._profile.getProfile$().asObservable();
	}
	changePassword(): boolean{
		if(this.ChangePasswordForm.invalid){
			this._auth.showError(new Error('Invalid form'));
			return false;
		}
		this.loadingChangePassword = true;
		const { currentPassword, newPassword } = this.ChangePasswordForm.value;
		this._auth.updatePassword(currentPassword!, newPassword!)
		.subscribe({
			error: () => {
				this.loadingChangePassword = false;
			},
			complete: () =>{
				this.loadingChangePassword = false;
				this.ChangePasswordForm.reset();
			}
		});
		return true;
	}

	changeUsername(): boolean{
		if(this.ChangeUsernameForm.invalid){
			this._auth.showError(new Error('Invalid form'));
			return false;
		}
		this.loadingChangeUsername = true;
		const { newUsername } = this.ChangeUsernameForm.value;
		this._auth.updateUsername(newUsername!)
		.subscribe({
			error: ()=>{
				this.loadingChangeUsername = false;
			},
			complete: () =>{
				this.loadingChangeUsername = false;
				this.ChangeUsernameForm.reset();
			}
		});
		return true;
	}
}

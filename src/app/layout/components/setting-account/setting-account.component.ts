import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-config-account',
  templateUrl: './setting-account.component.html',
	standalone: false
})
export class SettingAccountComponent {
	private readonly _auth = inject(AuthService);
	loadingChangePassword: boolean = false;
	loadingChangeUsername: boolean = false;
	ChangePasswordForm = new FormGroup({
		currentPassword: new FormControl('', Validators.required),
		newPassword: new FormControl('', Validators.required)
	})
	ChangeUsernameForm = new FormGroup({
		newUsername: new FormControl('', Validators.required)
	})
	ChangePassword(): boolean{
		if(this.ChangePasswordForm.invalid){
			this._auth.ShowError(new Error('Invalid form'));
			return false;
		}
		this.loadingChangePassword = true;
		const { currentPassword, newPassword } = this.ChangePasswordForm.value;
		this._auth.ChangePassword(currentPassword!, newPassword!)
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
	ChangeUsername(): boolean{
		if(this.ChangeUsernameForm.invalid){
			this._auth.ShowError(new Error('Invalid form'));
			return false;
		}
		this.loadingChangeUsername = true;
		const { newUsername } = this.ChangeUsernameForm.value;
		this._auth.ChangeUsername(newUsername!)
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

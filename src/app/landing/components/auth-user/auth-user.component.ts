import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
	animations: [
		trigger('box', [
			state('fill', style({
				width: '100%'
			})),
			state('empty', style({
				width: 0
			})),
			transition('* => *', [
				animate('1s ease-in-out')
			])
		])
	],
	styles: `
		.box{
			width: 0;
		}
	`
})
export class AuthUserComponent {
	private readonly _auth = inject(AuthService);
	stateOfAnimation = 'fill';
	showTitle = false;
	constructor(private route: ActivatedRoute, private router: Router){}
	ngOnInit(){
		const token = this.route.snapshot.paramMap.get('token');
		if(!token){
			this.router.navigate(['/login']);
			return;
		}
		this._auth.authenticate(token)
		.subscribe(()=>{
			console.log('User authenticated');
			this._auth.logout();
			this.router.navigate(['/login']);
		});
	}
	afterAnimationEntry(){
		this.showTitle = true;
		this.stateOfAnimation = 'empty';
	}
}

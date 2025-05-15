import { Component, inject } from '@angular/core';
import { LayoutService } from 'src/app/service/layout.service';

@Component({
  selector: 'app-background-posters',
  templateUrl: './background-posters.component.html',
  styles: `
		.background{
			transform: skew(-20deg, 15deg) translateX(-11%) translateY(-8%);
			filter: brightness(20%);
			height: 200vh;
		}
		@media (max-width: 768px) {
			.background{
				transform: skew(-20deg, 15deg) translateX(-50%) translateY(-8%);
				filter: brightness(20%);
				height: 200vh;
			}
		}
	`
})
export class BackgroundPostersComponent {
	private readonly _layout = inject(LayoutService);
	urlPosters: string[] | undefined;
	ngOnInit(){
		this._layout.posters$
		.subscribe(
			(res)=>{
				this.urlPosters = res.result;
			}
		)
	}
}

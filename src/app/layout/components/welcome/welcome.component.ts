import { Component } from '@angular/core';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
	animations: [
		trigger('animationSentences', [
			transition('* => *', [
				query(':enter', [
					style({
						opacity: 0
					}),
					stagger(2000, [
						animate('500ms',
							style({
								opacity: 1,
								color: 'red'
							})
						),
						// It's only keep one moment
						animate('1s',
							style({
								color: 'red'
							})
						),
						animate('500ms',
							style({
								opacity: 0
							})
						)
					])
				], { optional: true })
			])
		]),
		trigger('animationHidden', [
			transition(':enter', [
				style({
					opacity: 0
				}),
				animate('1s', style({
					opacity: 1
				}))
			]),
			transition(':leave', [
				animate('1s',
					style({
					opacity: 0
					})
				)
			])
		])
	],
	styles: [
		`
			h1{
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				opacity: 0;
				color: black;
				letter-spacing: -0.2rem;
			}
		`
	]
})
export class WelcomeComponent {
	sentences = [
		'WELCOME TO SERFLIX',
		'THE BEST MOVIE APP',
		'ENJOY IT'
	];
	totalTimeOfSentencesAnimation = 2000*this.sentences.length;
	hiddenAnimation = false;
	ngOnInit(){
		setTimeout(()=>{
			this.hiddenAnimation = true;
		}, this.totalTimeOfSentencesAnimation);
	}
}

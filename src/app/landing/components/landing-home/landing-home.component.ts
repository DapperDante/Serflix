import { ChangeDetectionStrategy, Component} from '@angular/core';
import { moveBackLeftToRight, slideInFwd, swingInBottom } from 'src/app/animation/animation';
@Component({
	selector: 'app-landing',
	templateUrl: './landing-home.component.html',
	standalone: false,
	animations: [
		slideInFwd('0.5s'),
		moveBackLeftToRight('2.5s'),
		swingInBottom('1s')
	],
	styles: `
		.title{
			background: linear-gradient(90deg,rgba(220, 53, 69, 1) 0%, rgba(255, 255, 255, 1) 18%, rgba(220, 53, 69, 1) 36%);
			background-clip: text;
			background-position: -70% 0%;
			color: transparent;
			background-size: 400%;
			font-size: 18vw;
			letter-spacing: -5px;
			z-index: -1;
		}
		.contain-chairs{
			height: 40vh;
		}
		.chairs{
			mask-image: linear-gradient(black 95%, transparent);
		}
		.poster{
			filter: brightness(40%);
			transition-duration: 50ms;
		}
		.poster:hover{
			filter: brightness(1);
		}
		.text-backdrop{
			backdrop-filter: blur(1.5rem);
			padding: 1rem;
		}
		.text-backdrop h2{
			font-size: 5rem;
			text-wrap: nowrap;
		}
		.providers-image{
			border-radius: 20px;
		}
		.animation-leftToRigth{
			animation: leftToRight 2s;
		}
		.animation-rightToLeft{
			animation: rightToLeft 2s;
		}
		@keyframes leftToRight{
			from{
				transform: translateX(-100%) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg);
			}
			to{
				transform: translateX(-5%) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg) !important;
			}
		}
		@keyframes rightToLeft{
			from{
				transform: translateX(100%) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg);
			}
			to{
				transform: translateX(5%) rotateX(-4deg) rotateY(-10deg) rotateZ(7deg) !important;
			}
		}
		@media (max-width: 768px) {
			.title{
				font-size: 25vw;
			}
			.contain-chairs{
				height: 50vh;
			}
			.chairs{
				object-fit: cover;
			}
			.text-backdrop h2{
				text-align: center;
				font-size: 3rem;
				text-wrap: wrap;
			}
		}
		#canvas-logo {
		min-height: 400px;
		max-height: 400px;
		max-width: fit-content;
		}
  `,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingHomeComponent {
	scrollToElement($element: any): void {
		setTimeout(() => {
			$element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}, 200);
	}
}

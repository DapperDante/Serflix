import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const moveBackLeftToRight = (duration: string) =>{
	return trigger('moveBackLeftToRight', [
		transition(':enter', [
			style({
				backgroundPosition: '50% 0%',
			}),
			animate(`${duration} ease-in-out`)
		])
	]);
}
export const slideInFwd = (duration: string) =>{
	return trigger('slideInFwd', [
		transition(':enter', [
			style({
				transform: 'translateZ(-1400px)',
				opacity: 0
			}),
			animate(`${duration} cubic-bezier(0.250, 0.460, 0.450, 0.940)`)
		])
	])
}
export const swingInBottom = (duration: string) => {
	return trigger('swingInBottom', [
		transition(':enter', [
			style({
				transform: 'rotateX(-70deg)',
				transformOrigin: 'bottom',
				opacity: 0
			}),
			animate(`${duration} cubic-bezier(0.250, 0.460, 0.450, 0.940)`)
		])
	])
}
export const slideInFwdStagger = (duration: string, delay: string) =>{
	return trigger('slideInFwdStagger', [
		transition('*=>*', [
			query(':enter', [
				style({
					transform: 'translateZ(-1400px)',
					opacity: 0
				}),
				stagger(delay, [
					animate(`${duration} cubic-bezier(0.250, 0.460, 0.450, 0.940)`)
				])
			], {optional: true})
		])
	])
}
export const expandHeight = (duration: string) => {
	return trigger('expandHeight', [
		transition(':enter', [
			style({
				height: 0
			}),
			animate(`${duration} cubic-bezier(0.250, 0.460, 0.450, 0.940)`)
		])
	])
}

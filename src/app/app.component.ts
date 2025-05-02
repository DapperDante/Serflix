import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfig, LayoutService } from './layout/service/app.layout.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) {}
	ngOnInit(): void {
		this.primengConfig.ripple = true;
		const newConfig: AppConfig = {
			ripple: true,
			inputStyle: 'outlined',
			menuMode: 'overlay',
			colorScheme: 'dark',
			componentTheme: 'red',
			scale: 14,
			menuTheme: 'dark',
			topbarTheme: 'red',
			menuProfilePosition: 'start'
		}
		this.layoutService.config.set(newConfig);
	}
}

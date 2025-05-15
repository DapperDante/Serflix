import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './app.footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {}

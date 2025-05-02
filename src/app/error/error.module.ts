import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
	declarations: [ErrorPageComponent],
	imports: [ErrorRoutingModule],
})
export class ErrorModule {}

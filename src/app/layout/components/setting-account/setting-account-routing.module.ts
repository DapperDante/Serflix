import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingAccountComponent } from './setting-account.component';

const routes = [
	{
		path: '',
		component: SettingAccountComponent,
		title: 'Settings | Serflix'
	}

];

@NgModule({
  imports: [
		RouterModule.forChild(routes)
  ],
	exports: [
		RouterModule
	]
})
export class SettingAccountRoutingModule { }

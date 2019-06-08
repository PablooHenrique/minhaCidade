import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from '../tabs/tabs.page';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
	{
		path: 'root',
		component: RootPage,
	},
	{
		path: 'user-create',
		component: UserCreatePage,
	},
	{
		path: 'tab-1',
		component: Tab1Page,
	},
	{
		path: '',
		redirectTo: '/root',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class RootPageRoutingModule {}

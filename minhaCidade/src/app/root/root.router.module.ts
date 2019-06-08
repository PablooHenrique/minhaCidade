import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from '../tabs/tabs.page';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';

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

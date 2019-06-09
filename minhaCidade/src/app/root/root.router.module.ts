import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from '../tabs/tabs.page';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { ParceirosPage } from '../parceiros/parceiros.page.';

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
		path: 'conquistas',
		component: Tab2Page,
	},
	{
		path: 'minha-carteira',
		component: Tab3Page,
	},
	{
		path: 'parceiros',
		component: ParceirosPage,
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

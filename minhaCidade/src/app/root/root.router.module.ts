import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from '../tabs/tabs.page';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { ParceirosPage } from '../parceiros/parceiros.page.';
import {DesafioListPage} from '../desafio/list/desafio-list.page';
import {PerfilPage} from '../perfil/perfil.page';
import {DesafiosCreatePage} from '../desafio/create/desafios-create.page';
import {DesafiosCreateFinishedPage} from '../desafio/create-finished/desafios-create-finished.page';
import { DesafioDetailPage } from '../desafio/detail/desafio-detail.page';
import { DetailMeuDesafioPage } from '../desafio/detail-meu-desafio/detail-meu-desafio.page';

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
		path: 'perfil',
		component: PerfilPage,
	},
	// {
	// 	path: 'perfil/inicio',
	// 	component: Tab1Page,
	// },
	{
		path: 'desafio-list',
		component: DesafioListPage,
	},
	{
		path: 'desafio-create',
		component: DesafiosCreatePage,
	},
	{
		path: 'desafio-create-finished',
		component: DesafiosCreateFinishedPage,
	},
	{
		path: 'desafio-detail',
		component: DesafioDetailPage,
	},
	{
		path: 'meu-desafio-detail',
		component: DetailMeuDesafioPage,
	},
	// {
	// 	path: 'perfil/conquistas',
	// 	component: Tab2Page,
	// },
	// {
	// 	path: 'perfil/minha-carteira',
	// 	component: Tab3Page,
	// },
	{
		path: 'parceiros',
		component: ParceirosPage,
	},
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'tab1',
				children: [
					{
						path: '',
						loadChildren: '../tab1/tab1.module#Tab1PageModule'
					}
				]
			},
			{
				path: 'tab2',
				children: [
					{
						path: '',
						loadChildren: '../tab2/tab2.module#Tab2PageModule'
					}
				]
			},
			{
				path: 'tab3',
				children: [
					{
						path: '',
						loadChildren: '../tab3/tab3.module#Tab3PageModule'
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/tab1',
				pathMatch: 'full'
			}
		]
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

import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RootPageRoutingModule} from './root.router.module';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import {ParceirosPage} from '../parceiros/parceiros.page.';
import {DesafioListPage} from '../desafio/list/desafio-list.page';
import {LoginService} from '../services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {PerfilPage} from '../perfil/perfil.page';
import {TabsPage} from '../tabs/tabs.page';
import {DesafiosCreatePage} from '../desafio/create/desafios-create.page';
import {DesafiosCreateFinishedPage} from '../desafio/create-finished/desafios-create-finished.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RootPageRoutingModule,
		HttpClientModule
	],
	declarations: [
		RootPage,
		UserCreatePage,
		ParceirosPage,
		DesafioListPage,
		DesafiosCreatePage,
		DesafiosCreateFinishedPage,
		PerfilPage,
		TabsPage
	],
	providers: [LoginService]

})
export class RootPageModule {}

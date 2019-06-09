import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RootPageRoutingModule} from './root.router.module';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { ParceirosPage } from '../parceiros/parceiros.page.';
import {Tab1Page} from '../tab1/tab1.page';
import {DesafioListPage} from '../desafio/list/desafio-list.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RootPageRoutingModule
	],
	declarations: [RootPage, UserCreatePage, Tab1Page, , Tab2Page, Tab3Page, ParceirosPage]
})
export class RootPageModule {}

import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RootPageRoutingModule} from './root.router.module';
import {RootPage} from './root.page';
import {UserCreatePage} from '../user/user-create/user-create.page';
import { Tab1Page } from '../tab1/tab1.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RootPageRoutingModule,
		
	],
	declarations: [RootPage, UserCreatePage, Tab1Page]
})
export class RootPageModule {}

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserCreatePage} from './user-create/user-create.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '/user-create', component: UserCreatePage }])
	],
	declarations: [UserCreatePage]
})
export class UserModule {}

import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DesafioListPage} from './list/desafio-list.page';
import { DesafioDetailPage } from './detail/desafio-detail.page';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '/desafio-list', component: DesafioListPage },{ path: '/desafio-detail', component: DesafioDetailPage }])
	],
	declarations: [DesafioListPage, DesafioDetailPage]
})
export class DesafioModule {

}
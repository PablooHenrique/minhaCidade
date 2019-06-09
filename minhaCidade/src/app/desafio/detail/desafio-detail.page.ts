import {Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-desafio-detail',
	templateUrl: 'desafio-detail.page.html',
	styleUrls: ['desafio-detail.page.scss']
})
export class DesafioDetailPage {

	constructor(private nav: NavController){

	}

	voltar(){
		this.nav.pop();
	}

}

import {Component} from '@angular/core';
import {Desafio} from '../create/desafio.model';
import {DesafioService} from '../desafio.service';

@Component({
	selector: 'app-desafio-list',
	templateUrl: 'desafio-list.page.html',
	styleUrls: ['desafio-list.page.scss']
})
export class DesafioListPage {

	desafios: Desafio[] = [];

	constructor(desafioService: DesafioService) {
		this.desafios = desafioService.desafios;
	}

}

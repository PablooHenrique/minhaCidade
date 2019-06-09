import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Desafio} from '../create/desafio.model';
import {DesafioService} from '../desafio.service';

@Component({
	selector: 'app-desafio-list',
	templateUrl: 'desafio-list.page.html',
	styleUrls: ['desafio-list.page.scss']
})
export class DesafioListPage {

	desafios: any[];

	constructor(private route: Router, desafioService: DesafioService){
		this.desafios = desafioService.desafios;
	}

	verMais(){
		this.route.navigate(['desafio-detail']);
	}


}

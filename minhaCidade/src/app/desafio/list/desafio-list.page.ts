import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-desafio-list',
	templateUrl: 'desafio-list.page.html',
	styleUrls: ['desafio-list.page.scss']
})
export class DesafioListPage {

	desafios: any[];
	constructor(private route: Router){
		this.desafios = [
			{titulo: 'Cortar Grama',moeda:'2', diasAtivo: '5', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Pintar banco',moeda:'6', diasAtivo: '15', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Plantar árvore', moeda:'3',diasAtivo: '4', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Trocar lâmpada queimada',moeda:'5', diasAtivo: '11', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Limpar entulho',moeda:'1', diasAtivo: '1', img: 'assets/imagens/praça-grama.jpg' },
		]
	}
	
	verMais(){
		this.route.navigate(['desafio-detail']);
	}


}

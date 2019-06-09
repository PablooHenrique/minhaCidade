import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	desafios: any[];
	constructor(private _router: Router) {
		this.desafios = [
			{titulo: 'Cortar Grama',moeda:'2', diasAtivo: '5', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Pintar banco',moeda:'6', diasAtivo: '15', img: 'assets/imagens/praça-grama.jpg' },
			{titulo: 'Plantar árvore', moeda:'3',diasAtivo: '4', img: 'assets/imagens/praça-grama.jpg' },
		]
	}

	conferirDesafios() {
		console.log('Passando auiq');
		this._router.navigate(['/desafio-list']);
	}

	verMais(){
		this._router.navigate(['meu-desafio-detail']);
	}

}

import {Injectable} from '@angular/core';
import {Desafio} from './create/desafio.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../user/user-create/usuario.model';

@Injectable()
export class DesafioService {
	private static RESOURCE_PATH = 'https://anuardaher.com/minhagoiania/';

	desafios: any[] = [
		{titulo: 'Cortar Grama',moeda:'2', diasAtivo: '5', img: 'assets/imagens/praça-grama.jpg' },
		{titulo: 'Pintar banco',moeda:'6', diasAtivo: '15', img: 'assets/imagens/praça-grama.jpg' },
		{titulo: 'Plantar árvore', moeda:'3',diasAtivo: '4', img: 'assets/imagens/praça-grama.jpg' },
		{titulo: 'Trocar lâmpada queimada',moeda:'5', diasAtivo: '11', img: 'assets/imagens/praça-grama.jpg' },
		{titulo: 'Limpar entulho',moeda:'1', diasAtivo: '1', img: 'assets/imagens/praça-grama.jpg' }
	];

	constructor(private _http: HttpClient) {}

	save(desafio: Desafio) {
		this.desafios.push(desafio);
		return true;
		// const usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
		// return this._http.post<Usuario>(DesafioService.RESOURCE_PATH + 'issue/' + usuario.id,
		// 		JSON.stringify(desafio),
		// 		{headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
	}

	listaByUserId(desafio: Desafio) {
		const userLocalStorege = JSON.parse(localStorage.getItem('usuario')) as Usuario;
		return this._http.get<Usuario[]>(DesafioService.RESOURCE_PATH + 'issue/FINALIZADOS' + userLocalStorege.id,
				{headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
	}

	listaOpened(desafio: Desafio) {
		return this._http.get<Usuario[]>(DesafioService.RESOURCE_PATH + 'issue/ABERTOS',
				{headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
	}
}

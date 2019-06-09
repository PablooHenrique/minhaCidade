import {Injectable} from '@angular/core';
import {Desafio} from './create/desafio.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../user/user-create/usuario.model';

@Injectable()
export class DesafioService {
	private static RESOURCE_PATH = 'https://anuardaher.com/minhagoiania/';

	desafios: Desafio[] = [
		{id: 1, categoria: 'Jardinagem', descricao: 'Aparar a grama', local: 'Praça do Sol', pontos: '+ 15', observacaoCriador: '' },
		{id: 1, categoria: 'Jardinagem', descricao: 'Plantar Arvore', local: 'Praça do Sol', pontos: '+ 15', observacaoCriador: '' },
		{id: 2, categoria: 'Pintura', descricao: 'Pintar o banco', local: 'Praça do Sol', pontos: '+ 15', observacaoCriador: '' },
		{id: 3, categoria: 'Limpeza', descricao: 'Remover o lixo', local: 'Praça do Sol', pontos: '+ 15', observacaoCriador: '' }
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

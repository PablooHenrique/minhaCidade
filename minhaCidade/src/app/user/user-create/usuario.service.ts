import {Injectable} from '@angular/core';
import {Usuario} from './usuario.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsuarioService {

	usuarios: Usuario[] = [
		{id: 10, nome: 'Pablo Henrique Reis Carvalho', cpf: '04129153161', senha: 'pablo'}
	];

	private static RESOURCE_PATH = 'https://anuardaher.com/minhagoiania/';

	constructor(private _http: HttpClient) {}

	login(cpf: string, senha: string) {
		return this._http.post<Usuario>(UsuarioService.RESOURCE_PATH + 'login',
				{cpf, password: senha},
				{headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
	}

	save(usuario: Usuario) {
		// return this._http.post<Usuario>(UsuarioService.RESOURCE_PATH + 'signup',
		// 		JSON.stringify(usuario),
		// 		{headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
		this.usuarios.push(usuario);
		return true;
	}

	addUserToLocalStorege(usuario: Usuario) {
		localStorage.setItem('usuario', JSON.stringify(usuario));
	}
}

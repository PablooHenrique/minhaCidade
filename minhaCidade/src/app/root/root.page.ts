import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '../user/user-create/usuario.service';
import {ToastController} from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'root.page.html',
	styleUrls: ['root.page.scss']
})
export class RootPage {

	cpf: string;
	senha: string;

	constructor(private _router: Router, private _userService: UsuarioService, private _toast: ToastController) {}

	async login() {
		this._userService.addUserToLocalStorege({id: 1, nome: 'Pablo Henrique', cpf: '041-291-531-61'});
		this.showToast('Login efetuado com sucesso');
		this._router.navigate(['/tabs']);

		// this._userService.login(this.cpf, this.senha).then(response => {
		// 	this._userService.addUserToLocalStorege(response);
		// 	this.showToast('Login efetuado com sucesso');
		// 	this._router.navigate(['/tabs']);
		// });
	}

	async showToast(msg: string) {
		const toast = await this._toast.create({
			message: msg,
			duration: 2000,
			position: 'top'
		});

		toast.present();
	}

	cadastrarUsuario() {
		this._router.navigate(['/user-create']);
	}

}

import {Component} from '@angular/core';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario.model';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
	selector: 'app-user-create',
	templateUrl: 'user-create.page.html',
	styleUrls: ['user-create.page.scss']
})
export class UserCreatePage {

	usuario: Usuario = {};

	constructor(private _usuarioService: UsuarioService,
				private _toast: ToastController,
				private _router: Router) {

	}

	async save() {
		// this._usuarioService.save(this.usuario).then(response => {
		// 	this.showToast('Usuário criado com sucesso.');
		// 	this._router.navigate(['/tabs']);
		// });

		const isSaved = this._usuarioService.save(this.usuario);
		if (isSaved) {
			this.showToast('Usuário criado com sucesso.');
			this._router.navigate(['/tabs']);
		}
	}

	async showToast(msg: string) {
		const toast = await this._toast.create({
			message: msg,
			duration: 2000,
			position: 'top'
		});

		toast.present();
	}
}

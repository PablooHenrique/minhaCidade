import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {ToastController} from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'root.page.html',
	styleUrls: ['root.page.scss']
})
export class RootPage {

	constructor(private router: Router, private _loginService: LoginService, private _toast: ToastController) {}

	login() {
		this.showToast('Login realizado com sucesso');
		this.router.navigate(['/tabs']);
	}

	cadastrarUsuario() {
		this.router.navigate(['/user-create']);
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

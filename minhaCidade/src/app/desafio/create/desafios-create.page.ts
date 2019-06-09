import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
	selector: 'app-desafio-create',
	templateUrl: 'desafios-create.page.html',
	styleUrls: ['desafios-create.page.scss']
})
export class DesafiosCreatePage {

	constructor(private _router: Router, private _toast: ToastController) {}

	salvar() {
		this.showToast('Desafio adicionado com sucesso');
		this._router.navigate(['/desafio-list']);
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

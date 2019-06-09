import {Component} from '@angular/core';
import {Desafio} from './desafio.model';
import {DesafioService} from '../desafio.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
	selector: 'app-desafio-create',
	templateUrl: 'desafios-create.page.html',
	styleUrls: ['desafios-create.page.scss']
})
export class DesafiosCreatePage {
	desafio: any = {img: 'assets/imagens/praça-grama.jpg'};

	constructor(private _desafioService: DesafioService, private _toast: ToastController, private _router: Router) {
	}

	async save() {
		const saved = this._desafioService.save(this.desafio);
		if (saved) {
			this.showToast('Desafio criado com sucesso.');
			this._router.navigate(['/tabs']);
			console.log(this._desafioService.desafios);
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

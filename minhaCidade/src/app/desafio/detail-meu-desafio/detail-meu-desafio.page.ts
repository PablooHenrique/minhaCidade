import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core'

@Component({
	selector: 'app-detail-meu-desafio',
	templateUrl: 'detail-meu-desafio.page.html',
	styleUrls: ['detail-meu-desafio.page.scss']
})
export class DetailMeuDesafioPage {

	imagemAtual: any;
	constructor(private nav: NavController) {

	}

	adiconarFoto() {
		// if (Capacitor.isPluginAvailable('Camera')) {
		// 	Plugins.Camera.getPhoto({
		// 		quality: 50,
		// 		source: CameraSource.Prompt,
		// 		correctOrientation: true,
		// 		height: 320,
		// 		width: 200,
		// 		resultType: CameraResultType.Base64
		// 	}
		// 	).then(imagem => {
		// 		this.imagemAtual = imagem.base64String;
		// 	}
		//
		// 	).catch(error => {
		// 		console.log(error)
		//
		// 	}
		// 	)
		// }
	}
}

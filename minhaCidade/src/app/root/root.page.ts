import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'root.page.html',
	styleUrls: ['root.page.scss']
})
export class RootPage {

	constructor(private router: Router) {

	}

	cadastrarUsuario() {
		this.router.navigate(['/user-create']);
	}

}

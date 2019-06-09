import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
	selector: 'app-root',
	templateUrl: 'root.page.html',
	styleUrls: ['root.page.scss']
})
export class RootPage {

	constructor(private router: Router, private _loginService: LoginService) {}

	login() {
		this.router.navigate(['/perfil/inicio']);
	}

	cadastrarUsuario() {
		this.router.navigate(['/user-create']);
	}

}

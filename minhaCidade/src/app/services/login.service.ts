import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

	resourcePath = '';

	constructor(private _http: HttpClient) {}

	login() {
		return this._http.get(this.resourcePath).toPromise();
	}
}

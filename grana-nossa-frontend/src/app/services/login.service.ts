import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.urlApiUsuario}`;

  constructor(
    private service: ApiService<Login>,
  ) { }

  autenticar(login: Login) : Promise<Login | void> {
    return this.service.post(`${this.url}/autenticar`, login);
  }
}

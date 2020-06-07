import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.urlApiUsuario}/usuario`;

  constructor(
    private service: ApiService<Login>,
  ) { }

  logar(login: Login) {
    this.service.post(this.url, login);
  }
}

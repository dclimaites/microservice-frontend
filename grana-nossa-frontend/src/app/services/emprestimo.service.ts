import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Emprestimo } from '../models/emprestimo';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private url = `${environment.urlApiEmprestimos}`;
  constructor(
    private service: ApiService<Emprestimo>,
  ) { }

  solicitarEmprestimo(modelo: Emprestimo): Promise<Emprestimo | void> {
    return this.service.post(this.url, modelo);
  }

  consultarTodos(): Promise<Array<Emprestimo>> {
    const usuario: Login = JSON.parse(localStorage.getItem('usuario'));

    return this.service.get(`${this.url}?emailUsuario=${usuario.email}`);
  }
}

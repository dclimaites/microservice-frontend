import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean;
  model: Login;
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.hide = true;
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const usuario = new Login(this.formLogin.get('email').value, this.formLogin.get('senha').value);

      this.loginService.autenticar(usuario).then(
        (sucesso) => {
          this.router.navigateByUrl('/emprestimo/solicitar');
          localStorage.setItem('usuario', JSON.stringify(sucesso));
        },
        (erro) => {
          this.toastr.error(erro);
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  ) {
    
  }
  
  ngOnInit(): void {
    this.hide = true;
    this.formLogin = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]],
    });
  }

  onSubmit() {
    if(this.formLogin.valid) {
      console.warn('Tentou Enviar');
    }
  }
}

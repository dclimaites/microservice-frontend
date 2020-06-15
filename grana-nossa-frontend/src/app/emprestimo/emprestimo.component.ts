import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmprestimoService } from '../services/emprestimo.service';
import { Emprestimo } from '../models/emprestimo';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  formGroup: FormGroup;
  modelo: Emprestimo = new Emprestimo();
  constructor(
    private formBuilder: FormBuilder,
    private service : EmprestimoService,
    private toastr : ToastrService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      montante : ['', [Validators.required, Validators.min(1)]],
      dataVencimento : ['', [Validators.required]],
    });
  }

  onSubmit() {
    debugger;
    if(this.formGroup.valid){
      this.service.solicitarEmprestimo(this.modelo).then(
        () => {
          this.toastr.success("Empréstimo solicitado com sucesso");
        },
        (erro) => {
          this.toastr.error(erro);
        }
      )
    }
  }

  deslogar() {
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

}

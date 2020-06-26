import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { DataSource } from '@angular/cdk/table';
import { Emprestimo } from 'src/app/models/emprestimo';

@Component({
  selector: 'app-consulta-emprestimo',
  templateUrl: './consulta-emprestimo.component.html',
  styleUrls: ['./consulta-emprestimo.component.css']
})
export class ConsultaEmprestimoComponent implements OnInit {

  displayedColumns: string[] = ['dataBase', 'montante', 'dataVencimento', 'taxaJuros', 'taxaCET'];
  emprestimos: Array<Emprestimo> = new Array<Emprestimo>();
  constructor(
    private emprestimoServico: EmprestimoService,
  ) { }

  ngOnInit(): void {
    this.emprestimoServico.consultarTodos().then(
      (sucesso) => {
        console.log(sucesso);
        debugger;
        this.emprestimos = sucesso;
      },
      (erro) => {

      }
    );
  }

}

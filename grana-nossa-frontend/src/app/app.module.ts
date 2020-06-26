import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './core/custom-material/custom-material.module';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { ConsultaEmprestimoComponent } from './emprestimo/consulta-emprestimo/consulta-emprestimo.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'emprestimo/solicitar', component: EmprestimoComponent },
  { path: 'emprestimo/consultar', component: ConsultaEmprestimoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmprestimoComponent,
    ConsultaEmprestimoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,

  ],
  exports: [
    CustomMaterialModule,
  ],
  providers: [
    FormBuilder, 
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEmprestimoComponent } from './consulta-emprestimo.component';

describe('ConsultaEmprestimoComponent', () => {
  let component: ConsultaEmprestimoComponent;
  let fixture: ComponentFixture<ConsultaEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

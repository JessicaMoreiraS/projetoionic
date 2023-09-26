import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarDadosUserPage } from './alterar-dados-user.page';

describe('AlterarDadosUserPage', () => {
  let component: AlterarDadosUserPage;
  let fixture: ComponentFixture<AlterarDadosUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarDadosUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

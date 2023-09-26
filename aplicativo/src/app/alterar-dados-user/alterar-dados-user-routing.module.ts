import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarDadosUserPage } from './alterar-dados-user.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarDadosUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarDadosUserPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarDadosUserPageRoutingModule } from './alterar-dados-user-routing.module';

import { AlterarDadosUserPage } from './alterar-dados-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarDadosUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarDadosUserPage]
})
export class AlterarDadosUserPageModule {}

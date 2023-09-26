//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  user: { id: number; nome: string; img: string; email: string; senha: string; } | null = null;
  constructor(){
    const usuarioAtual = localStorage.getItem('usuarioAtual');
    if (usuarioAtual) {
      this.user = JSON.parse(usuarioAtual);
      if (this.user !== null) {
        // É seguro acessar as propriedades de this.user aqui
        console.log(this.user.nome);
      } else {
        // Trate o caso em que this.user é null
        console.log('Usuário não está definido');
      }
    }
  }
  recebeUser(user: any, usuarioAtual: any): any {
    if (usuarioAtual) {
      user = JSON.parse(usuarioAtual);
    }
    return user;
  }
}



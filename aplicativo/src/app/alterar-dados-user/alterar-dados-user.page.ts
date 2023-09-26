import { Component, OnInit, ViewChild  } from '@angular/core';
import type { IonInput } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {updateUser} from '../app.component';

@Component({
  selector: 'app-alterar-dados-user',
  templateUrl: './alterar-dados-user.page.html',
  styleUrls: ['./alterar-dados-user.page.scss'],
})
export class AlterarDadosUserPage implements OnInit {

  user: { id: number; nome: string; img: string; email: string; senha: string; } | null = null;
  constructor(private router: Router){
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

  formDataAtualizar!: FormGroup;

  ngOnInit() {

    this.formDataAtualizar = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      img: new FormControl()
    });
  }

  onSubmitUp(){
    var nome= "";
    var email ="";
    var img = "";
    var id = 0;
    var senha = "erro";
    const usuarioAtual = localStorage.getItem('usuarioAtual');
    if (usuarioAtual) {
      this.user = JSON.parse(usuarioAtual);
      if (this.user !== null) {
        // É seguro acessar as propriedades de this.user aqui
        id=this.user.id;
        nome= this.user.nome;
        email= this.user.email;
        img= this.user.img;
        senha= this.user.senha;
      } else {
        // Trate o caso em que this.user é null
        console.log('Usuário não está definido');
      }
    }


    if(this.formDataAtualizar.value.nome != "" && this.formDataAtualizar.value.nome != undefined && this.formDataAtualizar.value.nome != null){
      nome= this.formDataAtualizar.value.nome
    }
    if(this.formDataAtualizar.value.email != "" && this.formDataAtualizar.value.email != undefined && this.formDataAtualizar.value.email != null){
      email= this.formDataAtualizar.value.email
    }
    if(this.formDataAtualizar.value.img != "" && this.formDataAtualizar.value.img != undefined && this.formDataAtualizar.value.img != null){
      img= this.formDataAtualizar.value.img
    }
    var pessoa: { id: number; nome: string; img: string; email: string; senha: string } = { id: id, nome:nome,  img:img, email:email, senha:senha };

    updateUser(pessoa, this.router)
  }
}

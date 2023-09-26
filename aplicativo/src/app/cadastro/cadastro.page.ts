// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {setUser} from '../app.component';
// import users from '../app.component';
// import setUser from '../app.component';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  constructor(private router: Router) { }
  formData!: FormGroup;

  ngOnInit() {

    this.formData = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      senha: new FormControl()
    });
  }

  onSubmit(){
    // console.log(this.formData.value);
    var pessoa: { id: number; nome: string; img: string; email: string; senha: string } = { id: 5, nome:this.formData.value.nome,  img:'https://ionicframework.com/docs/img/demos/avatar.svg', email:this.formData.value.email, senha:this.formData.value.senha };
   
    // Object: pessoa
    setUser(pessoa, this.router)
  }
}

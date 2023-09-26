// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule  } from '@angular/forms';
import {getUser} from '../app.component';
import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  formAcess!: FormGroup

  ngOnInit() {

    this.formAcess = new FormGroup({
      email: new FormControl(),
      senha: new FormControl()
    });
  }

  onSeach(){
    // console.log(this.formData.value);
    var credenciais: { email: string; senha: string } = { email:this.formAcess.value.email, senha:this.formAcess.value.senha };
    getUser(credenciais, this.router)
  }
}

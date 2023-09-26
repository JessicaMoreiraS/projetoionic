import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent{
  constructor() {}
}


const arrayUserJSON = localStorage.getItem('arrayUsers');
var arrayUsers: { id: number; nome: string; img: string; email: string; senha: string }[]  =[]
if (arrayUserJSON) {
  arrayUsers = JSON.parse(arrayUserJSON);
} else {
  arrayUsers=[
    {
      id: 1,
      nome:'pessoa1',
      img:'https://i.pinimg.com/736x/76/37/a4/7637a4c50bfadd46cb82ed336ed55730.jpg',//'https://ionicframework.com/docs/img/demos/avatar.svg',
      email:'pessoa1@gmail.com',
      senha:'123'
    },
    {
      id: 2,
      nome:'pessoa2',
      img:'https://ionicframework.com/docs/img/demos/avatar.svg',
      email:'pessoa2@gmail.com',
      senha:'123'
    }
  ];
}

export var usuarioAtual: object

export function setUser(pessoa: any, router: Router) {
  const novoUser: { id: number; nome: string; img: string; email: string; senha: string } = pessoa;
  var ultimo=arrayUsers.length-1
  novoUser.id=(arrayUsers[ultimo].id)+1;
  var verifica=verificaExistenciaUser(novoUser)
  if(!verifica){
      arrayUsers.push(novoUser);
      // console.log(arrayUsers);
      localStorage.setItem('arrayUsers', JSON.stringify(arrayUsers));
      usuarioAtual = arrayUsers[arrayUsers.length - 1];
      getUser(usuarioAtual, router)
      //router.navigateByUrl("tabs");
  }else{
    console.log("usuario já cadastrado");
    router.navigateByUrl('cadastro');
  }
}

export function getUser(credenciais:any, router: Router){
  for(let i=0; i<arrayUsers.length; i++){
    if(arrayUsers[i].email == credenciais.email){
      if(arrayUsers[i].senha == credenciais.senha){
        usuarioAtual = arrayUsers[i];
        localStorage.setItem('usuarioAtual', JSON.stringify(usuarioAtual));
        router.navigateByUrl("tabs");
      }else{
        console.log("senha invalida")
      }
    }else[
      console.log("email invalida")
    ]
  }
}

function verificaExistenciaUser(novoUser:any): boolean{
  for(let i=0; i<arrayUsers.length; i++){
    if(arrayUsers[i].email == novoUser.email){
      return true;
    }
  }
  return false;
}

export function updateUser(pessoa: any, router: Router){
  const upUser: { id: number; nome: string; img: string; email: string; senha: string } = pessoa;
  var verifica=verificaExistenciaUser(upUser)
  if(verifica){
    for(let i=0; i<arrayUsers.length; i++){
      if(upUser.id== arrayUsers[i].id){
        arrayUsers[i]=upUser
        getUser(upUser, router)
      }
    }
  }else{
    setUser(upUser, router)
  }

}


export const musicas: { id: number; nome: string; img: string; cantor: string; file: string; categoria: string }[] = [
  {
    id: 1,
    nome: "Feliz pra cachorro",
    img: "../assets/imagens/felizPraCachorro.jpg",
    cantor: "5 a seco",
    file: "../assets/musicas/FelizpraCachorro5aSeco.mp3",
    categoria: "mpb"
  },
  {
    id: 2,
    nome: "Voar o céu",
    img: "../assets/imagens/voarOCeu.jpg",
    cantor: "republica",
    file: "../assets/musicas/VoarOCeuRelespublica.mp3",
    categoria: "mpb"
  },
  {
    id: 3,
    nome: "Guarda-chuva",
    img: "../assets/imagens/guardaChuva.jpg",
    cantor: "Daparte",
    file: "../assets/musicas/GuardaChuvaDaparte.mp3",
    categoria: "mpb"
  },
  {
    id: 4,
    nome: "Mama said",
    img: "../assets/imagens/mamaSaid.jpg",
    cantor: "Lukas Grahn",
    file: "../assets/musicas/MamaSaidLukasGraham.mp3",
    categoria: "pop"
  },
  {
    id: 5,
    nome: "Hello",
    img: "../assets/imagens/hello.jpg",
    cantor: "Adele",
    file: "../assets/musicas/HelloAdele.mp3",
    categoria: "pop"
  },
  {
    id: 6,
    nome: "Cool Kids",
    img: "../assets/imagens/coolKids.jpg",
    cantor: "Echosmith",
    file: "../assets/musicas/CoolKidsEchosmith.mp3",
    categoria: "pop"
  },
  {
    id: 7,
    nome: "Tengo",
    img: "../assets/imagens/tengo.jpeg",
    cantor: "Kurt",
    file: "../assets/musicas/TengoAntonioJose.mp3",
    categoria: "latina"
  },
  {
    id: 8,
    nome: "Ahora te puedes marchar",
    img: "../assets/imagens/ahoraTePuedesMarchar.jpeg",
    cantor: "Luis Miguel",
    file: "../assets/musicas/AhoraTePuedesMarcharLuisMiguel.mp3",
    categoria: "latina"
  },
  {
    id: 9,
    nome: "Aquí y así",
    img: "../assets/imagens/aquiYAsi.jpg",
    cantor: "La Isla Centeno",
    file: "../assets/musicas/AquiLaIslaCenteno.mp3",
    categoria: "latina"
  }
];



// console.log(musicasPorCategoria);

import { Component } from '@angular/core';
var media: HTMLAudioElement ///string | HTMLAudioElement;
var controle=false;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  radios=[
    {nome:"Disney", img:"../../assets/imagens/disney.jpg", file:"../../assets/musicas/VinhetasRadioDisneyFM.mp3"},
    {nome:"Metropolitana", img:"../../assets/imagens/metropolitana.jpg", file:"../../assets/musicas/VinhetasRadioMetropolitanaFM.mp3"},
    {nome:"Jovem Pan", img:"../../assets/imagens/jovemPan.png", file:"../../assets/musicas/VinhetasJovemPan2Classicas.mp3"},
    {nome:"Alpha FM", img:"../../assets/imagens/alpha.jpg", file:"../../assets/musicas/alphaFMClassicsLeonardo.mp3"}];
    ngOnInit() {}

  playMusic(radio: {file:any}) {
    console.log(radio)
    if(media){
      this.pauseMusic(media, controle)
    }
    media = new Audio(radio.file);
    media.load();
    media.play();
    controle=true;
 }
 pauseMusic(media:any, controler:any){
  if(controler){
    media.pause()
    controle=false;
  }
 }

 pararMusica(){
  if(controle){
    if(media){
      media.pause();
    }
  }
 }
 maisVolumeMusica(){
  if(media){
    media.volume = Math.min(1, media.volume + 0.1)
  }
 }
 menosVolumeMusica(){
  if(media){
    media.volume = Math.min(1, media.volume - 0.1)
  }
 }
}

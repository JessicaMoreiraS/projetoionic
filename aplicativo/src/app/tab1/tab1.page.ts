import { Component, ViewChild } from '@angular/core';
import { musicas as arrayMusica } from '../app.component';
var media: HTMLAudioElement ///string | HTMLAudioElement;
var controle=false;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor() {
    var musicas = arrayMusica
  }

  ngOnInit() {}

  public musicas = arrayMusica;
  playlists = ['latina', 'mpb', 'pop']


  playMusic(musica: {file:any}) {
    console.log(musica)
    if(media){
      this.pauseMusic(media, controle)
    }
    media = new Audio(musica.file);
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




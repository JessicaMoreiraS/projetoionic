import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { musicas as arrayMusica } from '../app.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public musicas = arrayMusica;
  public results = [...this.musicas];
  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: { target: any; }) {
    const query = ev.target.value.toLowerCase();
    this.results = this.musicas.filter((musica) =>
      musica.nome.toLowerCase().includes(query)
    );
  }
}






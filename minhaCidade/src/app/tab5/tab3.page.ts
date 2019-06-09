import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  desafioCumpridos: any[]
  constructor() {
    this.desafioCumpridos = [
      {moedas: '5', titulo: 'Titulo do desafio'},
      {moedas: '2', titulo: 'Titulo do desafio'},
      {moedas: '8', titulo: 'Titulo do desafio'},
      {moedas: '10', titulo: 'Conquista Titulo'},
      {moedas: '15', titulo: 'Conquista Titulo'},
      {moedas: '1', titulo: 'Validou Conclusao'},
      {moedas: '3', titulo: 'Titulo do desafio'},
    ]
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  conquistas: any[]
  constructor() {
    this.conquistas = [
      {titulo: "Árvores somos nozes", descricao:"1º desafio em Jardinagem", moedas: "10", status: "feito", img: 'assets/icon/jardinagem.svg'},
      {titulo: "Pinta como eu pinto?", descricao:"1º desafio em Pintura", moedas: "10", status: "feito", img: 'assets/icon/pintura.svg'},
      {titulo: "Escoteiro de bairro", descricao:"5 desafios realizados", moedas: "15", status: "feito", img: 'assets/icon/escoteiro.svg'},
    ]
  }

}

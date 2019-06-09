import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: 'parceiros.page.html',
  styleUrls: ['parceiros.page.scss']
})
export class ParceirosPage {

  parceiros: any[]

  constructor() {
    this.parceiros = [
      {nome: 'Padaria Gourmet Genérica', endereco: 'Avenida do Povo, n 552 Jardin Curitiba'},
      {nome: 'Quitanda Bom Sabor', endereco: 'Rua SM 10, n 405 Setor Marabá'},
      {nome: 'Posto Sao Sebastião', endereco: 'Rua 42, n 524 Esmeraldas'},
      {nome: 'Rancho A', endereco: 'Av. Anápolis, n 174 Receiro dos Bandeirantes'},
      {nome: 'Elétrico Peças', endereco: 'Av. Fued José, n 884 Setor Leste'},
    ]
  }

}

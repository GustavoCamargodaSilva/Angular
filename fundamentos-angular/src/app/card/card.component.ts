import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: '1000'
  }

  getFullPrice(){
    //metodo que pode ser chamado na interpolaçao
  }
}

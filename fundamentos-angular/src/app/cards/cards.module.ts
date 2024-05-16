import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';



@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent, //Aqui se declara qual componentes que estao em cards module
    CardRoxoComponent, //podem ser exportados ao importar CardsModule
    CardButtonComponent
  ],
})
export class CardsModule { }

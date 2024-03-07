import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
     
@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent
    //CardButtonComponent,
    
  ]
})
export class CardsModule { }

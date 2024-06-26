import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('planTypeAlias') planType : string = '';
  @Input({ required : true }) planPrice : number = 0;
  //required vai fazer com que preencher o input seja obrigatório
}

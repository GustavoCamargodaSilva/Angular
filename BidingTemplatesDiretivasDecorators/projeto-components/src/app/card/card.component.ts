import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  
  @Input({required:true}) planPrice: number = 0;
  @Input('planType') planType: string = '';


  buttonClicked(valueEmitted: boolean): void {
    console.log('Button clicked!', valueEmitted);
  }
  
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required:true, alias:'planType'}) planType: string = '';
  @Input({required:true, alias: 'planPrice'}) planPrice: number = 0;

  @Input({required:true, alias:'cardStyle'}) cardStyle : 'orange' | 'purple' = 'orange';

  @Output('buttonCliked') buttonClickedEmmit = new EventEmitter<void>();
  
  onButtonClicked() {
    this.buttonClickedEmmit.emit();
  }
}

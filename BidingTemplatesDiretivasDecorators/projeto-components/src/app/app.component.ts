import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
handlePlanType(text: string){
  this.cardPlanType = text;
}

  cardPlanType = 'Simples';
  cardPlanPrice = 100;
  
}

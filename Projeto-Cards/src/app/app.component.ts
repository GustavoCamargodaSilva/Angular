import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  planType: string[] = ['Simples', 'Completo'];
  planPrice: number = 0;
  
  onButtonCliked(){
    alert('Button clicked');
    //AQUI SERIA A CHAMADA HTTP
  }

}

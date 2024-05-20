import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PropertyBinding';
  inputText = "Texto Inicialxxx";
  isDisabled = true;

  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = 'Texto inicial Teste';
  inputType = "password";
  isDisabled = true;

  habilitar() {
    this.isDisabled = false;
  }

  desabilitar() {
    this.isDisabled = true;
  }
}

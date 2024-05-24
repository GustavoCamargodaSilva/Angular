import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EventBinding';
  inputText = "Texto Inicialxxx";
  isDisabled = true;
  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }

  handleInputKeyup(event: any){
    console.log("event")
  }

  handleInputEvent(event:Event){
    const currentText = (event.target as HTMLInputElement).value;

    console.log(currentText);
  }
}

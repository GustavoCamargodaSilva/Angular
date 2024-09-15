import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({required:true, alias:'text'}) buttonText: string = '';

  @Input ({required:true, alias:'style'}) 
  buttonStyle: 'white' | 'purple' = 'white';

  @Output('cliked') buttonClickedEmmit = new EventEmitter<void>();

  @Input ({alias:'disabled'}) isDisabled = false;

  onButtonClicked(){
    this.buttonClickedEmmit.emit();
  }

}

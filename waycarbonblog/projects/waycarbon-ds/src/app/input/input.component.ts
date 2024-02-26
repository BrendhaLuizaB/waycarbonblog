import { Component, NgModule } from '@angular/core';
import { UsersCommentsComponent } from '../users-comments/users-comments.component';
import { CommonModule, NgIf } from '@angular/common';
import { InputService } from '../../../../waycarbon/src/app/services/input.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [UsersCommentsComponent, FormsModule, InputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  constructor(
    public inputService: InputService,
    public snackBar: MatSnackBar, 
    
  ) {}

  inputValue:string = '';
  get showInput(): boolean {
    return this.inputService.showInput;
  }
  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }

  onSubmit() {
    this.inputService.inputValue = this.inputValue;
    console.log('Valor do input:', this.inputValue);
  }
  sendMessage() {
    this.onSubmit()
    this.inputValue=''
    this.snackBar.open('Mensagem enviada!', 'Fechar', {
      panelClass: ['custom-snackbar'],
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}

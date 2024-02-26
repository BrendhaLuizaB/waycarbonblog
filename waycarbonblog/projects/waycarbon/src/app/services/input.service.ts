import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  showInput: boolean = false;
  inputValue: string = '';

  toggleInput() {
    this.showInput = true;
  }
}
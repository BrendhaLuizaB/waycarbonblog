import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  showInput: boolean = false;

  toggleInput() {
    this.showInput = true;
  }
}
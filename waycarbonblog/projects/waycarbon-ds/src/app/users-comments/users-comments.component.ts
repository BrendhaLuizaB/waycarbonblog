import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-comments',
  standalone: true,
  imports: [NgIf],
  templateUrl: './users-comments.component.html',
  styleUrl: './users-comments.component.css'
})
export class UsersCommentsComponent {
  showInput: boolean = false;

  onClickShowInput() {
    this.showInput = true;
  }
}

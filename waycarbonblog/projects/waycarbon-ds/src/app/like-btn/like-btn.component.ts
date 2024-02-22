import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  standalone: true,
  imports: [NgIf],
  templateUrl: './like-btn.component.html',
  styleUrl: './like-btn.component.css'
})
export class LikeBTNComponent {
  @Input() isLiked = false;
  @Input() likesCount = 0;

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likesCount += !this.isLiked ? -1 : +1;
  }
}

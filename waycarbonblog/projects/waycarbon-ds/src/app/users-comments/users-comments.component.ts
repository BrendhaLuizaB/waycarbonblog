import { Component, Input } from '@angular/core';
import { ComentsComponent } from '../../../../waycarbon/src/app/components/coments/coments.component';

@Component({
  selector: 'app-users-comments',
  standalone: true,
  imports: [ComentsComponent],
  templateUrl: './users-comments.component.html',
  styleUrl: './users-comments.component.css'
})
export class UsersCommentsComponent {
  @Input() numberOfResponses: number = 0
}

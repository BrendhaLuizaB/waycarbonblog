import { Component } from '@angular/core';
import { LikeBTNComponent } from '../like-btn/like-btn.component';
import { UsersCommentsComponent } from '../users-comments/users-comments.component';
import { ReportComponent } from '../report/report.component';
import { ModalUsersComponent } from '../modal-users/modal-users.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [LikeBTNComponent, UsersCommentsComponent, ReportComponent],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})
export class CommentCardComponent {
  constructor(private dialogRef: MatDialog) {}
 
  openDialog(name: string, id: number) {
    this.dialogRef.open(ModalUsersComponent, {
      height: '550px',
      data: { name, id },
    });
  }
}

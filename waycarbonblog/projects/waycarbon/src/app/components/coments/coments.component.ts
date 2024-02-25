import { Component, Input, OnInit } from '@angular/core';
import { default as userPost } from '../../../../../../src/assets/rawPost';
import { NgFor, NgIf } from '@angular/common';
import { LikeBTNComponent } from '../../../../../waycarbon-ds/src/app/like-btn/like-btn.component';
import { ReportComponent } from '../../../../../waycarbon-ds/src/app/report/report.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsersComponent } from '../../../../../waycarbon-ds/src/app/modal-users/modal-users.component';
import { UsersCommentsComponent } from '../../../../../waycarbon-ds/src/app/users-comments/users-comments.component';
import { formatTimestamp } from '../../utils/data.utils';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    LikeBTNComponent,
    ReportComponent,
    UsersCommentsComponent,
  ],
  templateUrl: './coments.component.html',
  styleUrl: './coments.component.css',
})
export class ComentsComponent implements OnInit {
  @Input() isOpen = false;
  constructor(private dialogRef: MatDialog) {}
  comments = userPost.comments;
  ngOnInit(): void {
    console.log('COMENTARIOS AUTHOR:', this.comments);
  }

  formattedTimeStamp(timestamp: string): string {
    return formatTimestamp(timestamp);
  }

  openDialog(name: string, id: number) {
    this.dialogRef.open(ModalUsersComponent, {
      height: '550px',
      data: { name, id },
    });
  }
}

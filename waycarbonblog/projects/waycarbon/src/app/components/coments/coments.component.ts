import { Component, Input, OnInit } from '@angular/core';
import { default as userPost } from '../../../../../../src/assets/rawPost';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LikeBTNComponent } from '../../../../../waycarbon-ds/src/app/like-btn/like-btn.component';
import { ReportComponent } from '../../../../../waycarbon-ds/src/app/report/report.component';
import {MatDialog} from '@angular/material/dialog';
import { ModalUsersComponent } from '../../../../../waycarbon-ds/src/app/modal-users/modal-users.component';
import { UsersCommentsComponent } from '../../../../../waycarbon-ds/src/app/users-comments/users-comments.component';
import { InputComponent } from '../../../../../waycarbon-ds/src/app/input/input.component';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, LikeBTNComponent, ReportComponent, UsersCommentsComponent, InputComponent],
  templateUrl: './coments.component.html',
  styleUrl: './coments.component.css',
})
export class ComentsComponent implements OnInit {
  comments = userPost.comments;

    formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    return formattedDate;
  }

  ngOnInit(): void {
    console.log('COMENTARIOS AUTHOR:', this.comments);
  }
  @Input() isOpen = false;
  constructor(private dialogRef : MatDialog, public inputService: InputService){

  }
  toggleInput() {
    this.inputService.toggleInput();
  }
  
  openDialog(name: string, id: number){
    this.dialogRef.open(ModalUsersComponent, {
      height: '550px',
      data: {name, id},
    });
}
}


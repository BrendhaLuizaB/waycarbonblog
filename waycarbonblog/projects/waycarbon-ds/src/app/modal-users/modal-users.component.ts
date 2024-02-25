import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { default as usersData } from '../../../../../src/assets/users';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../../../../waycarbon/src/app/models/users.model';
import { ReportComponent } from '../report/report.component';
import { InputComponent } from '../input/input.component';
import { RemoveFriendComponent } from '../remove-friend/remove-friend.component';
import { AddFriendComponent } from '../add-friend/add-friend.component';

@Component({
  selector: 'app-modal-users',
  standalone: true,
  imports: [NgFor, ReportComponent, InputComponent, RemoveFriendComponent, NgIf, AddFriendComponent ],
  templateUrl: './modal-users.component.html',
  styleUrl: './modal-users.component.css'
})


export class ModalUsersComponent {
  
  @Input() isOpen = true;
  @Input() name = '';
  users:User[] = usersData;
  selectedUser: User | undefined;
  clicked = false;

  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, 
      id: number},
  ) {
    this.selectedUser = this.users.find(user => user.username === data.name);
  }

  formatTimestamp(memberSince: string | undefined): string {
    if (memberSince) {
      const date = new Date(memberSince);
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      return date.toLocaleDateString('pt-BR', options);
    } else {
      return '';
    }
  }

  toggleFriendship() {
    if (this.selectedUser?.id !== undefined) {
      const friendIds = this.users[0].friendIds || [];
      if (friendIds.includes(this.selectedUser.id)) {
        this.users[0].friendIds = friendIds.filter(id => id !== this.selectedUser?.id);
      } else {
        this.users[0].friendIds = [...friendIds, this.selectedUser.id];
      }
    }
  }
}
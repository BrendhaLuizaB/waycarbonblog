import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { default as usersData } from '../../../../../src/assets/users';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../../../../waycarbon/src/app/models/users.model';
import { ReportComponent } from '../report/report.component';
import { InputComponent } from '../input/input.component';
import { RemoveFriendComponent } from '../remove-friend/remove-friend.component';
import { AddFriendComponent } from '../add-friend/add-friend.component';
import { formatMemberSince } from '../../../../waycarbon/src/app/utils/data.utils';

@Component({
  selector: 'app-modal-users',
  standalone: true,
  imports: [NgFor, ReportComponent, InputComponent, RemoveFriendComponent, NgIf, AddFriendComponent ],
  templateUrl: './modal-users.component.html',
  styleUrl: './modal-users.component.css'
})


export class ModalUsersComponent {
  @Input() isOpen = true;

  users:User[] = usersData;
  selectedUser: User | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}
  ) {
    this.selectedUser = this.users.find(user => user.username === data.name);
  }

  formattedMemberSince(memberSince: string | undefined): string {
    return formatMemberSince(memberSince);
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
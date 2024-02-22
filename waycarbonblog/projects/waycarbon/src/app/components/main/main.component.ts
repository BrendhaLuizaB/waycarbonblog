import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserIconComponent } from '../../../../../waycarbon-ds/src/app/user-icon/user-icon.component';
import { default as usersData } from '../../../../../../src/assets/users';
import { User } from '../../models/users.model';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserIconComponent, NgFor, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})

export class MainComponent implements OnInit {
  users: User[] = usersData;
  ngOnInit(): void {
    console.log('Usuarios:', this.users);
  }
}

import { Component, OnInit } from '@angular/core';
import { UserIconComponent } from '../../../../../waycarbon-ds/src/app/user-icon/user-icon.component';
import { default as usersData } from '../../../../../../src/assets/users';
import { User } from '../../models/users.model';
import { ComentsComponent } from '../coments/coments.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserIconComponent, ComentsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})

export class MainComponent implements OnInit {
  ngOnInit(): void {}
  users: User[] = usersData;
}

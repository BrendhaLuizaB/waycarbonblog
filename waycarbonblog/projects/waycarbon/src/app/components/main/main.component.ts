import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserIconComponent } from '../../../../../waycarbon-ds/src/app/user-icon/user-icon.component';
import { default as usersData } from '../../../../../../src/assets/users';
import { User } from '../../models/users.model';
import { ComentsComponent } from '../coments/coments.component';
import { LikeBTNComponent } from '../../../../../waycarbon-ds/src/app/like-btn/like-btn.component';
import { ReportComponent } from '../../../../../waycarbon-ds/src/app/report/report.component';
import { UsersCommentsComponent } from '../../../../../waycarbon-ds/src/app/users-comments/users-comments.component';
import { InputComponent } from '../../../../../waycarbon-ds/src/app/input/input.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserIconComponent, NgFor, NgIf, ComentsComponent, LikeBTNComponent, ReportComponent, UsersCommentsComponent, InputComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})

export class MainComponent implements OnInit {
  users: User[] = usersData;
  ngOnInit(): void {
  }
}

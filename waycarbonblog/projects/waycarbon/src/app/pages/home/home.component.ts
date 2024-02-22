import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { UserIconComponent } from '../../../../../waycarbon-ds/src/app/user-icon/user-icon.component';
import { LikeBTNComponent } from '../../../../../waycarbon-ds/src/app/like-btn/like-btn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent, UserIconComponent, LikeBTNComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

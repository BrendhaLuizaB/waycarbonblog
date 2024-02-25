import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserIconComponent } from './user-icon/user-icon.component';
import { LikeBTNComponent } from './like-btn/like-btn.component';
import { ReportComponent } from './report/report.component';
import { UsersCommentsComponent } from './users-comments/users-comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'waycarbonDS';
}

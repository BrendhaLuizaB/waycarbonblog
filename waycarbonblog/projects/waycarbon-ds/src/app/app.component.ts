import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserIconComponent } from './user-icon/user-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waycarbonDS';
}

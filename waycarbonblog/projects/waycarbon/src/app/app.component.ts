import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserIconComponent } from '../../../waycarbon-ds/src/app/user-icon/user-icon.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, UserIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waycarbon';
}

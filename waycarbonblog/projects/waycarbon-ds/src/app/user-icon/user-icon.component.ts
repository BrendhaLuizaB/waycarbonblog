import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  standalone: true,
  imports: [],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.css'
})
export class UserIconComponent {
  @Input() username!: string;
  @Input() id!: number;
  @Input() image!: string;
  @Input() memberSince!: string;
}

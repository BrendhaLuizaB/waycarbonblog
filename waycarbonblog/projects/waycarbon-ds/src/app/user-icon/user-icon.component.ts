import { Component, Input } from '@angular/core';
import { formatMemberSince } from '../../../../waycarbon/src/app/utils/data.utils';

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

  formattedMemberSince(timestamp: string): string {
    return formatMemberSince(timestamp);
  }
}

import { Component, OnInit } from '@angular/core';
import { default as userComments } from '../../../../../../src/assets/rawPost';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LikeBTNComponent } from '../../../../../waycarbon-ds/src/app/like-btn/like-btn.component';
import { ReportComponent } from '../../../../../waycarbon-ds/src/app/report/report.component';


@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, LikeBTNComponent, ReportComponent],
  templateUrl: './coments.component.html',
  styleUrl: './coments.component.css',
})
export class ComentsComponent implements OnInit {
  comment = userComments.comments;

    formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    return formattedDate;
  }

  ngOnInit(): void {
    console.log('COMENTARIOS AUTHOR:', this.comment);
    console.log('COMENTARIOS AUTHOR:', this.comment);
  }
}


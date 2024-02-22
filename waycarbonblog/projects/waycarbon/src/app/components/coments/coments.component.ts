import { Component, OnInit } from '@angular/core';
import { default as userComments } from '../../../../../../src/assets/rawPost';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { formatTimestamp } from '../../utils/data.utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './coments.component.html',
  styleUrl: './coments.component.css',
})
export class ComentsComponent implements OnInit {
  
//   organizeComments(comments: Comment[]): Comment[] {
//     const organizedComments: Comment[] = [];
//     const commentMap: Map<number, Comment> = new Map();
 
//     // Criar um mapa para facilitar o acesso aos comentários pelo ID
//     comments.forEach(comment => {
//        commentMap.set(comment.id, comment);
//     });
 
//     // Organizar os comentários na estrutura hierárquica
//     comments.forEach(comment => {
//        if (comment.respondsTo !== null) {
//           const parentComment = commentMap.get(comment.respondsTo);
//           if (parentComment) {
//              if (!parentComment.replies) {
//                 parentComment.replies = [];
//              }
//              parentComment.replies.push(comment);
//           }
//        } else {
//           organizedComments.push(comment);
//        }
//     });
 
//     return organizedComments;
//  }
  // comment = userComments;
  comment = userComments.comments;

  // timestamp = userComments.timestamp;
  // formattedDate = format(new Date(this.timestamp), 'dd MMM yyyy, \'às\' HH:mm', { locale: ptBR });

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
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:', this.formattedDate);
  }
  formattedDate(arg0: string, formattedDate: any) {
    throw new Error('Method not implemented.');
  }
}


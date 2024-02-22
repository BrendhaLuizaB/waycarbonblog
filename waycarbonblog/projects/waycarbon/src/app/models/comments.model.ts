export interface Author {
    id: number;
    username: string;
  }
  
  export interface Comment {
    replies: any;
    id: number;
    respondsTo: number | null;
    author: Author[];
    timestamp: string;
    content: string;
  }
  
  export interface Article {
    id: number;
    timestamp: string;
    author: Author[];
    title: string;
    subtitle: string;
    content: string;
    comments: Comment[];
  }
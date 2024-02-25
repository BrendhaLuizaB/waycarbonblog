interface Comment {
  id: number;
  respondsTo: { id: number } | null;
  author: {
    id: number;
    username: string;
  };
  timestamp: string;
  content: string;
}

interface Article {
  id: number;
  timestamp: string;
  author: {
    id: number;
    username: string;
  };
  title: string;
  subtitle: string;
  content: string;
  comments: Comment[];
}

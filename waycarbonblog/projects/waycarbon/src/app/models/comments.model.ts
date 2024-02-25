export interface Comment {
  id: number;
  respondsTo: { id: number } | null;
  author: {
    id: number;
    username: string;
  };
  timestamp: string;
  content: string;
  responses: {
    author: {
      id: number;
      username: string;
    };
    timestamp: string;
    content: string;
  };
}

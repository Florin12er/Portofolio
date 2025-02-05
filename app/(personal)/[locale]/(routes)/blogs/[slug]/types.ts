interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
  likes: number;
}

interface ModalContent {
  title: string;
  description: string;
}

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  likes: number;
  responses: Comment[];
}

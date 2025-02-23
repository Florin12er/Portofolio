import { User } from "better-auth";

export interface ModalContent {
  title: string;
  description: string;
}

export interface Comment {
  id: User["id"];
  name: User["name"];
  image: User["image"];
  content: string;
  createdAt: string;
  likes: number;
  responses: Comment[];
}
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  imageUrl?: string;
  likes: number;
}

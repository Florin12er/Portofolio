export interface Project {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  imageUrl: string;
  livePreviewUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  tags: string[];
}
export type Locale = "en" | "de";
export type TagKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "javascript"
  | "html"
  | "nodejs"
  | "css"
  | "mongodb";

export type TranslationsType = {
  [key in Locale]: {
    [tag in TagKey]: string;
  };
};

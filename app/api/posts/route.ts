// app/api/posts/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .use(remarkGfm)
        .process(content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        content: contentHtml,
        rawContent: content,
      };
    }),
  );

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return NextResponse.json(posts);
}

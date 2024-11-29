// app/api/posts/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en"; // Default to English if no locale is specified
  const postsDirectory = path.join(process.cwd(), "_posts", locale);

  if (!fs.existsSync(postsDirectory)) {
    return NextResponse.json(
      { error: "No posts available for this locale" },
      { status: 404 },
    );
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        content: content,
        imageUrl: data.image || "/images/Jotion.png",
      };
    });

  return NextResponse.json(posts);
}

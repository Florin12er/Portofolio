// app/api/posts/[slug]/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "_posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const imageUrl = data.image || "/images/Jotion";

  return NextResponse.json({
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    content: content,
    imageUrl: imageUrl,
  });
}

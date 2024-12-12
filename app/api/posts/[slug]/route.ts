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
  const postsDirectoryEN = path.join(process.cwd(), "_posts/en/");
  const postsDirectoryDE = path.join(process.cwd(), "_posts/de/");
  const directories = [postsDirectoryEN, postsDirectoryDE];

  let fileContents = null;
  let fullPath = "";

  // Iterate through both directories to find the post
  for (const directory of directories) {
    fullPath = path.join(directory, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
      break;
    }
  }

  if (!fileContents) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

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

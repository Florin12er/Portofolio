// app/api/comments/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

// Comment schema validation
const commentSchema = z.object({
  name: z.string().min(1).max(50),
  content: z.string().min(1).max(500),
  postSlug: z.string(),
});

// Rate limiting
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, content, postSlug } = commentSchema.parse(body);

    const ipAddress = req.headers.get("x-forwarded-for") || req.ip || "unknown";

    // Check rate limit
    const recentComments = await prisma.comment.count({
      where: {
        ipAddress,
        createdAt: {
          gte: new Date(Date.now() - RATE_LIMIT_WINDOW),
        },
      },
    });

    if (recentComments >= RATE_LIMIT) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 },
      );
    }

    // Create comment
    const comment = await prisma.comment.create({
      data: {
        name,
        content,
        postSlug,
        ipAddress,
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const postSlug = url.searchParams.get("postSlug");

  if (!postSlug) {
    return NextResponse.json(
      { error: "Post slug is required" },
      { status: 400 },
    );
  }

  const comments = await prisma.comment.findMany({
    where: { postSlug },
    orderBy: { createdAt: "desc" },
    include: {
      responses: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  return NextResponse.json(comments);
}

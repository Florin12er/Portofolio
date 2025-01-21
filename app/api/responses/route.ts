import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const responseSchema = z.object({
  name: z.string().min(1).max(50),
  content: z.string().min(1).max(500),
  commentId: z.string(),
});

const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, content, commentId } = responseSchema.parse(body);

    const ipAddress = req.headers.get("x-forwarded-for") || req.ip || "unknown";

    // Check rate limit
    const recentResponses = await prisma.response.count({
      where: {
        ipAddress,
        createdAt: {
          gte: new Date(Date.now() - RATE_LIMIT_WINDOW),
        },
      },
    });

    if (recentResponses >= RATE_LIMIT) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 },
      );
    }

    // Create response
    const response = await prisma.response.create({
      data: {
        name,
        content,
        commentId,
        ipAddress,
      },
    });

    return NextResponse.json(response, { status: 201 });
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

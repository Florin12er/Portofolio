import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const likesCount = await prisma.like.count({
    where: { postSlug: slug },
  });

  return NextResponse.json({ likes: likesCount });
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const ipAddress = request.headers.get("x-forwarded-for") || "unknown";

  try {
    await prisma.like.create({
      data: {
        postSlug: slug,
        ipAddress,
      },
    });

    const likesCount = await prisma.like.count({
      where: { postSlug: slug },
    });

    return NextResponse.json({ likes: likesCount });
  } catch (error) {
    // Check if the error is a Prisma error and has the code property
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const likesCount = await prisma.like.count({
        where: { postSlug: slug },
      });
      return NextResponse.json({ likes: likesCount });
    }
    console.error("Error in POST /api/likes/[slug]:", error);
    return NextResponse.json({ error: "Failed to like post" }, { status: 500 });
  }
}

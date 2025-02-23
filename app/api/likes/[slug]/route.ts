import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getSession } from "@/lib/auth-client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const likesCount = await prisma.like.count({
    where: { postSlug: slug },
  });

  return NextResponse.json({ likes: likesCount });
}
export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postSlug: slug,
        user: {
          email: email, // Check if this user already liked this post
        },
      },
    });

    if (existingLike) {
      // User has already liked the post, return a message indicating so
      return NextResponse.json(
        { error: "You have already liked this post" },
        { status: 400 }
      );
    }

    // If no existing like, proceed with creating the like
    await prisma.like.create({
      data: {
        postSlug: slug,
        user: { connect: { email } }, // Connect user by email
      },
    });

    // Get updated likes count
    const likesCount = await prisma.like.count({
      where: { postSlug: slug },
    });

    return NextResponse.json({ likes: likesCount });
  } catch (error) {
    console.error("Error in POST /api/likes:", error);
    return NextResponse.json({ error: "Failed to like post" }, { status: 500 });
  }
}

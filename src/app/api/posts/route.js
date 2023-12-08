import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const category = searchParams.get("category");

    const POST_PER_PAGE = 3;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(category && { categorySlug: category })
        }
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
        ]);

        return new NextResponse(JSON.stringify(posts, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong in posts..." }, { status: 500 })
        );
    }
};

export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not authenticated..." }, { status: 401 })
        );
    }

    try {
        const body = await req.json();

        const post = await prisma.post.create({
            data: {
                ...body,
                userEmail: session.user.email
            }
        });

        return new NextResponse(
            JSON.stringify(post, { status: 201 })
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong in posts post hahahohohehe..." }, { status: 500 })
        );
    }
};
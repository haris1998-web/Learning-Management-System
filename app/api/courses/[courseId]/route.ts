import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";
import {db} from "@/lib/db";

export async function PATCH (
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const {userId} = auth();
        const { courseId } = params;
        const values = await req.json()

        if (!userId) return new NextResponse("Unauthorized", {status: 401});
        const course = await db.course.update({
            where: {id: courseId, userId},
            data: {...values},
        })

        return NextResponse.json(course);
    } catch (err) {
        console.log("[COURSE_ID]", err);
        return new NextResponse("Internal Error", {status: 500});
    }
}

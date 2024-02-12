import { NextRequest, NextResponse } from "next/server";

export async function analytics(req: NextRequest) {
	if (req.nextUrl.pathname === "/") {
		//track analytics

		try {
		} catch (error) {
			// fail silently
			console.error(error);
		}
	}

	return NextResponse.next();
}

export const matcher = {
	matcher: ["/"],
};

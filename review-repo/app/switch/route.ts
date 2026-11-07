// Dev helper to switch the mock user. Not part of the review.
import { NextResponse, type NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid") ?? "u1";
  const res = NextResponse.redirect(new URL("/account/orders", req.url));
  res.cookies.set("uid", uid);
  return res;
}

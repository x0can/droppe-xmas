import { NextResponse } from "next/server";

const success = ["/success"];
export default function middleware(req) {
  if (success.find((p) => p === req.nextUrl.pathname)) {
    return NextResponse.redirect("/");
  }
}

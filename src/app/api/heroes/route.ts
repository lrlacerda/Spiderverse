import { NextResponse } from "next/server";

import heroes from "./heroes.json";

// export async function GET() {
//   return NextResponse.json({ data: heroes });
// }
export async function GET() {
  return new Response(JSON.stringify(heroes), {
    headers: { 'Content-Type': 'application/json' },
  });
}

import { NextResponse } from "next/server";
import heroes from "./heroes.json";

export async function GET() {
  return NextResponse.json( heroes );
}



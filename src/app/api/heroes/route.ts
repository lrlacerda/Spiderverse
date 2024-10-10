/* eslint-disable */
// import { NextResponse } from "next/server";
// import heroes from "./heroes.json";

// export async function GET() {
//   return NextResponse.json( heroes );
// }

import heroes from "./heroes.json";

export async function GET() {
  // Usando o objeto Response padrão do JavaScript
  return new Response(JSON.stringify(heroes), {
    headers: { "Content-Type": "application/json" },
  });
}




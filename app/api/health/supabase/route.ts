import { NextResponse } from "next/server";

import { hasSupabaseConfig } from "@/lib/supabase";

export function GET() {
  return NextResponse.json({
    connected: hasSupabaseConfig(),
    projectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? null,
  });
}

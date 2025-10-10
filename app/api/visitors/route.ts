import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Create Supabase client with your environment variables
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET: just read the current count
export async function GET() {
  const { data, error } = await supabase
    .from("visitor_count")
    .select("count")
    .eq("id", "global")
    .single();

  if (error || !data) {
    console.error("Supabase GET error:", error);
    return NextResponse.json({ count: 0 });
  }

  return NextResponse.json({ count: data.count });
}

// POST: increment the counter atomically
export async function POST() {
  const { data, error } = await supabase.rpc("increment_visitor_count");

  if (error) {
    console.error("Supabase POST error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // The RPC returns the new count
  return NextResponse.json({ count: data });
}

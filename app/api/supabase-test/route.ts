import { createServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if environment variables exist
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!hasUrl || !hasKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing environment variables",
          details: {
            hasUrl,
            hasKey,
            message: "Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local",
          },
        },
        { status: 500 }
      );
    }

    // Try to create client and make a test query
    const supabase = await createServerClient();

    // Test with a simple query to a built-in schema
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Supabase connection successful",
      status: "connected",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
        type: error instanceof Error ? error.constructor.name : typeof error,
      },
      { status: 500 }
    );
  }
}

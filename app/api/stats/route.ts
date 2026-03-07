import { NextResponse } from "next/server";

let uploadedData: any[] = [];

export async function GET() {
  try {
    const total = uploadedData.length;

    return NextResponse.json({
      totalRecords: total,
      message: "Stats fetched successfully",
    });
  } catch {
    return NextResponse.json({ error: "Failed to get stats" }, { status: 500 });
  }
}
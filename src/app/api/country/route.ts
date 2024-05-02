import { APICountry } from "@/entities/country/country";
import { buildUrl, SEGMENT_NAME } from "@/utils/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const countryName = searchParams.get("q") || "";
  console.log(
    "fffffffffffffffffffffffffffffffffffffffffff q countryName:",
    countryName,
  );
  let data: APICountry[] = [];
  const url = buildUrl(SEGMENT_NAME, countryName);
  const response = await fetch(url);

  if (response.ok) {
    data = await response.json();
  }

  return Response.json({ data });
}

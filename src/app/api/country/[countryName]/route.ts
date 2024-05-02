import { APICountry } from "@/entities/country/country";
import { buildUrl, SEGMENT_NAME } from "@/utils/utils";
import { NextRequest } from "next/server";

type Params = {
  countryName: string;
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Params },
) {
  console.log("fffffffffffffffffffffffffffffffffffffffffff params:", params);
  const countryName = "";

  console.log(
    "fffffffffffffffffffffffffffffffffffffffffff countryName:",
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

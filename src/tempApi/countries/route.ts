import { APICountry } from "@/entities/country/country";
import { SEGMENT_ALL, buildUrl } from "@/utils/utils";

export async function GET() {
  let data: APICountry[] = [];

  const url = buildUrl(SEGMENT_ALL);
  const response = await fetch(url);

  if (response.ok) {
    data = await response.json();
  }

  return Response.json({ data });
}

import { omegaUpRepository } from "@/repositories/omegaUpRepository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : 1;
  const pageSize = searchParams.get("pageSize")
    ? parseInt(searchParams.get("pageSize")!)
    : 10;
  const query = searchParams.get("query") || "";

  try {
    const data = await omegaUpRepository.getListOfProblems({
      page,
      pageSize,
      query,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch problems" },
      { status: 500 }
    );
  }
}

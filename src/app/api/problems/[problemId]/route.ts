import { omegaUpRepository } from "@/repositories/omegaUpRepository";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ problemId: string }> }
) {
  const { problemId } = await params;
  const problemData = await omegaUpRepository.getProblemDetails(problemId);
  return Response.json(problemData);
}

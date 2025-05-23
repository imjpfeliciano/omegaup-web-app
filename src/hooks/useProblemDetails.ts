import { useQuery } from "@tanstack/react-query";

interface ProblemDetails {
  statement: Record<string, unknown>;
  languages: string[];
  title: string;
  problem_id: string;
  // Add other problem details properties here
}

export function useProblemDetails(problemId: string) {
  return useQuery<ProblemDetails>({
    queryKey: ["problem", problemId],
    queryFn: async () => {
      const response = await fetch(`/api/problems/${problemId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch problem details");
      }
      return response.json();
    },
    enabled: !!problemId,
  });
}

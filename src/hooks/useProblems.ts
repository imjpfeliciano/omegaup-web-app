import { useQuery } from "@tanstack/react-query";

interface Problem {
  problem_id: string;
  alias: string;
  title: string;
  difficulty?: string;
}

interface ProblemsResponse {
  results: Problem[];
  total: number;
}

interface UseProblemsOptions {
  page?: number;
  pageSize?: number;
  query?: string;
}

export function useProblems(options: UseProblemsOptions = {}) {
  const { page = 1, pageSize = 10, query = "" } = options;

  return useQuery<ProblemsResponse>({
    queryKey: ["problems", page, pageSize, query],
    queryFn: async () => {
      const searchParams = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        ...(query && { query }),
      });

      const response = await fetch(`/api/problems?${searchParams.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch problems");
      }
      return response.json();
    },
  });
}

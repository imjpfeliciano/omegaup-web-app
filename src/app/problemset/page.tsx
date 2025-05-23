"use client";
import { useProblems } from "@/hooks/useProblems";
import Link from "next/link";

interface OmegaupProblem {
  problem_id: string;
  alias: string;
  title: string;
  difficulty?: string;
}

const Problems = () => {
  const { data, error, isLoading } = useProblems();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
      </div>
    );
  }

  const { results, total } = data || { results: [], total: 0 };

  // FIXME: Add pagination

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Identificador</th>
          <th className="text-left">Titulo</th>
          <th>Dificultad</th>
        </tr>
      </thead>
      <tbody>
        {results.map((problem: OmegaupProblem) => (
          <tr key={problem.problem_id}>
            <td className="text-center">
              <Link href={`/problems/${problem.alias}`}>
                {problem.problem_id}
              </Link>
            </td>
            <td>{problem.title}</td>
            <td className="text-center">{problem.difficulty || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Problems;
